import '../../Css/PageCssCompnents/video.css';
import Animation from '../Animation'
const Video = ({ url }) => {

  return (
    <Animation transition={{ duration: 1, delay: 0.5 }}>

      <div className='youtube'>
        <iframe width="853" height="480"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>

      </div>

    </Animation>

  )
};

export default Video;
