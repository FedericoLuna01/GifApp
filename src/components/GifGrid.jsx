import PropTypes from 'prop-types'
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import { Spinner } from './Spinner';

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category) 

  return (
    <div className='m-10 md:mx-30 lg:mx-40 border-t-4 border-white'>
        <h3
            className='text-left font-bold text-3xl text-white py-4 uppercase'
        >{ category }</h3>
        {
            isLoading && <Spinner />

        }
        <div className="container grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 place-items-center  pb-20">
            {
                gifs.map(gif => (
                    <GifItem
                        key={gif.id}
                        { ...gif }
                    />
                ))
            }
        </div>
    </div>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}