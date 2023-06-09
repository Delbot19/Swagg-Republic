import React from 'react'
// import { pullList } from '../datas/PullData'
function Pull({ name, cover, cercle, colors, price, apport, news }) {
  return (
    <a href="# ">
      <div className='flex relative flex-col-reverse'>
        <div className='absolute top-1 left-1 border rounded-lg border-black w-full h-full'></div>
        <div className='relative rounded-lg border transform-gpu border-black bg-white 
            hover:shadow-[4px_4px_black] flex flex-col gap-4 items-center pt-4 lg:pt-9'>
          <div className='font-bold lg:text-2xl'>{name}</div>
          <div className='relative flex justify-center items-center mx-7 w-28 h-36 lg:mx-14 lg:w-44 lg:h-60'>
            <span>
              <img src={cover} alt="" />
            </span>
          </div>
          <svg
            width="74"
            height="76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className={`absolute top-24 right-0 lg:top-28 lg:right-6 ${news ? '' : 'hidden'}`}
          >
            <path
              d="m40.225 66.709-1.268 2.547-1.78-2.399a12.46 12.46 0 0 0-14.972-4.011l-2.741 1.187.174-2.832c.36-5.839-3.347-11.146-8.94-12.79l-2.829-.833 1.908-1.996c4.075-4.263 4.646-10.793 1.37-15.688L9.6 27.585l2.85-.314c5.826-.642 10.433-5.258 11.085-11.102l.307-2.759 2.495 1.652c4.841 3.206 11.25 2.64 15.475-1.362l2.123-2.011.833 2.803c1.657 5.579 6.925 9.273 12.72 8.917l2.987-.183-1.113 2.543c-2.357 5.387-.676 11.688 4.049 15.158l2.31 1.696-2.49 1.226c-5.285 2.602-8.056 8.545-6.656 14.275l.652 2.67-2.864-.693c-5.667-1.372-11.532 1.371-14.139 6.608Z"
              fill="#000"
              stroke="#000"
            ></path>
            <path
              d="m40.225 63.709-1.268 2.547-1.78-2.399a12.46 12.46 0 0 0-14.972-4.011l-2.741 1.187.174-2.832c.36-5.839-3.347-11.146-8.94-12.79l-2.829-.833 1.908-1.996c4.075-4.263 4.646-10.793 1.37-15.688L9.6 24.585l2.85-.314c5.826-.642 10.433-5.258 11.085-11.102l.307-2.759 2.495 1.652c4.841 3.206 11.25 2.64 15.475-1.362l2.123-2.011.833 2.803c1.657 5.579 6.925 9.273 12.72 8.917l2.987-.183-1.113 2.543c-2.357 5.387-.676 11.688 4.049 15.158l2.31 1.696-2.49 1.226c-5.285 2.602-8.056 8.545-6.656 14.275l.652 2.67-2.864-.693c-5.667-1.372-11.532 1.371-14.139 6.608Z"
              fill="#FFFD70"
              stroke="#000"
            ></path>
            <path
              d="M21.536 29 19 38.466l2.055.55 1.21-4.516c.41-1.528.26-2.322-.018-3.556l.728-.225 2.705 9.537 2.475.663 2.537-9.466-2.056-.55-.957 3.57c-.358 1.498-.344 1.878.064 3.278l-.72.256-2.322-8.16L21.536 29ZM37.577 43.444l.456-1.704-5.098-1.366.623-2.326 3.855 1.032.449-1.676-3.854-1.033.55-2.056 5.099 1.367.456-1.704-7.153-1.917-2.537 9.466 7.154 1.917ZM40.994 34.214l.02 10.15 2.353.631 2.587-4.408c.56-.952.886-1.792 1.172-2.86l.744.199c-.3 1.122-.436 1.898-.442 3.055l-.018 5.098 2.3.615 5.132-8.77-2.177-.583-1.829 3.525c-.615 1.212-.989 2.445-1.336 3.743l-.744-.199c.164-.666.295-1.21.374-1.668.08-.457.128-.908.133-1.414l.021-4.893-2.678-.718-2.428 4.249c-.518.905-.761 1.651-1.102 2.922l-.743-.2c.347-1.297.64-2.552.714-3.91l.192-3.963-2.245-.601Z"
              fill="#000"
            ></path>
          </svg>
          <div className='flex gap-2.5 justify-center'>
            {Array.from({ length: cercle }, (i, index) => (
              <div key={index} class="w-3.5 h-3.5 rounded-full border border-black" style={{ "background-color": colors[index] }}></div>
            ))}
          </div>
          <p className='font-bold lg:text-2xl'> {price} </p>
          <p className='px-2 text-sm font-semibold text-white bg-cornflower-blue rounded-full lg:text-base'>Assuré Casse & Vol</p>
          <div className='flex flex-col items-center lg:mb-9 mb-6 mt-2'> {apport} </div>
        </div>
      </div>
    </a>
  )
}

export default Pull