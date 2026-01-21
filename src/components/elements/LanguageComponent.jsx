import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner'
import useImageLoader from '../../hooks/useImageLoader'

function LanguageComponent({ iconSrc, language, level }) {
  const imageLoader = useImageLoader(iconSrc);

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[162px]">
      <div className="relative w-[162px] h-[162px] flex items-center justify-center">
        {imageLoader.loading ? (
          <LoadingSpinner size="md" variant="primary" />
        ) : (
          <img src={iconSrc} alt="Language" className={`mb-12 ${imageLoader.error ? 'opacity-50' : ''}`} />
        )}
      </div>
      <div className="text-primary font-semibold text-[22px]">{level}</div>
      <div className="text-black font-normal text-[28px]">{language}</div>
    </div>
  )
}

LanguageComponent.propTypes = {
    iconSrc: PropTypes.string,
    language: PropTypes.string,
    level: PropTypes.string
};

export default LanguageComponent