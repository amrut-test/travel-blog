import React from 'react'

function Youtube() {
    return (
        <div className="youtube-embed">
          <iframe
            src={`https://www.youtube.com/embed/WCtJ_EZQQBM`}
            width="100%"
            height="500px"
            title=""
          ></iframe>
          {/* <div>
            <p>
              Something
            </p>
          </div> */}
        </div>
      );
}

export default Youtube