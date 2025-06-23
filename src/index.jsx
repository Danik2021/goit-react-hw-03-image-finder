// basic React setup
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import css from './index.module.css';

// libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { BeatLoader } from 'react-spinners';

// services
import { fetchImagesWithQuery } from 'services/api';

// components
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallary/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

class App extends React.Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    page: 1,
    selectedImage: null,
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { query, page } = this.state;

    const images = await fetchImagesWithQuery(query, page);
    if (!images) {
      console.error('No images found for the given query.');
      return;
    }

    this.setState({
      images: images.hits,
      isLoading: false,
      page: (this.state.page += 1),
    });
  };

  handleShowMore = async () => {
    const { query, page } = this.state;

    this.setState({
      isLoading: true,
    });

    const images = await fetchImagesWithQuery(query, page);

    if (!images) {
      console.error('No images found for the given query.');
      return;
    }

    setTimeout(() => {
      this.setState({
        images: [...this.state.images, ...images.hits],
        isLoading: false,
        page: (this.state.page += 1),
      });
    }, 2000);
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  render() {
    return (
      <>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery
          className={css.test}
          images={this.state.images}
          openModal={this.openModal}
        />
        {!(this.state.images.length === 0) ? (
          <div className={css.isShowMore}>
            {this.state.isLoading ? (
              <BeatLoader
                className={css.BeatLoader}
                color="#35cc8d"
                loading={true}
                margin={4}
              />
            ) : (
              <Button onClick={this.handleShowMore} />
            )}
          </div>
        ) : null}
        {this.state.selectedImage && (
          <Modal
            onClose={() => this.setState({ selectedImage: null })}
            children={
              <img
                src={this.state.selectedImage.largeImageURL}
                alt={this.state.selectedImage.tags}
              />
            }
          />
        )}
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
