import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, search }) => {
  return (
    <>
      <Search isHome />
      {search.length > 0 && (
        <Categories title='Búsqueda'>
          <Carousel>
            {search.map(({ id, title, year, contentRating, duration, cover }) => {
              return (
                <CarouselItem
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  contentRating={contentRating}
                  duration={duration}
                  cover={cover}
                  isList
                />
              );
            })}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && search.length <= 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map(({ id, title, year, contentRating, duration, cover }) => {
              return (
                <CarouselItem
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  contentRating={contentRating}
                  duration={duration}
                  cover={cover}
                  isList
                />
              );
            })}
          </Carousel>
        </Categories>
      )}
      {
        search.length <= 0 && (
          <Categories title='Tendencias'>
            <Carousel>
              {trends.map(({ id, title, year, contentRating, duration, cover }) => {
                return (
                  <CarouselItem
                    key={id}
                    id={id}
                    title={title}
                    year={year}
                    contentRating={contentRating}
                    duration={duration}
                    cover={cover}
                  />
                );
              })}
            </Carousel>
          </Categories>
        )
      }
      {
        search.length <= 0 && (
          <Categories title='Originales'>
            <Carousel>
              {originals.map(({ id, title, year, contentRating, duration, cover }) => {
                return (
                  <CarouselItem
                    key={id}
                    id={id}
                    title={title}
                    year={year}
                    contentRating={contentRating}
                    duration={duration}
                    cover={cover}
                  />
                );
              })}
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};
export default connect(mapStateToProps, null)(Home);