import PropTypes from 'prop-types'

function LanguageComponent({ iconSrc, language, level }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[162px]">
      <div>
        <img src={iconSrc} alt="Language" className="mb-12" />
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