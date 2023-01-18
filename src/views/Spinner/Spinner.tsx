import * as S from './Spinner.style';

function Spinner({ size = 24, color = 'black', loading = true, ...props }) {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return (
    <>
      {loading && (
        <S.Icon>
          <svg
            viewBox='0 0 38 38'
            xmlns='http://www.w3.org/2000/svg'
            style={sizeStyle}
          >
            <g fill='none' fillRule='evenodd'>
              <g transform='translate(1 1)'>
                <path
                  d='M36 18c0-9.94-8.09-18-18-18'
                  stroke={color}
                  strokeWidth='2'
                >
                  <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 18 18'
                    to='350 18 18'
                    dur='0.9s'
                    repeatCount='indefinite'
                  />
                </path>
                <circle fill={color} cx='36' cy='18' r='1'>
                  <animateTransform
                    attributeName='transform'
                    type='rotate'
                    from='0 18 18'
                    to='360 18 18'
                    dur='0.9s'
                    repeatCount='indefinite'
                  />
                </circle>
              </g>
            </g>
          </svg>
        </S.Icon>
      )}
    </>
  );
}

export default Spinner;
