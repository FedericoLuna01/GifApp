import PropTypes from "prop-types";

const GifItem = ({title, url}) => {
  return (
    <div className="max-w-sm max-h-fit rounded-lg overflow-hidden shadow-sm shadow-slate-400 bg-white">
        <img src={url} alt={title}
          className="w-full"
        />
        <p
          className="font-bold text-center text-black p-3"
        >{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifItem