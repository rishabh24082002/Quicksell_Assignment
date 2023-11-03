import React from 'react';
import './Card.css'; // Change the CSS file name to NewCard.css
import { BsExclamationSquareFill } from "react-icons/bs";

const NewCard = ({ id, title, tag }) => {
  return (
    <div className="newCardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="newCardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
        <div className="newImageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAANlBMVEX///+ZmZmUlJSRkZH8/PzR0dH29vbV1dWhoaHu7u7f39+zs7PJycmOjo7r6+usrKy9vb3l5eWHR+lUAAAD+0lEQVR4nO1b27KrIAxVbuKt2v//2a22s1ssLEjQbucc1ltnCrNIQm7EqiooKCgoKCgoKCj4Z9F2eu5tLTfUtp91136bg2qbhYIQon5BrD9t37TqazTMMAn5zuGdjhTTYL7BQjXTGCDxS2acGlWpUyVjBisiNB5qsueKRVsZZ/HkYvVpNJo6mcZGpW5OodH2CTrZUelPuM9NTeZxhlBMP9JprJD9oZfnZhnieArF3o7j0bFpbFS6o3joLB4Lk4Muci6PxVAOYdKQnMd5TPLlcQyT7gB5rMi12FtMHkKMUggZygrekHWLjcWbyzURMkqZ25IoYS7C5oRjHF5Erd9iSatxEBA9n0cD/bqcd2dUM/z/yI47LT6hx/wiLpgbi7FiFh6f8ayD1JnKaRCP0HWEMhE85cDDDaFVAxQjhwd2qTz+HAcLXQiSMdQow5kMyLfbcNqlFDqBDKo0uB8UyIyWzlAk1MwRWr+EceOGZEm+OBM0Vahpg1aKicbDQGeN5asmtHakmSv2BlMGkbAHou+VRSSyeAcc7vKICEroiyTM2C1FsilJuTeRehsfKiJOUgyOZYjwULH6w6bzaPFOi5Gg1dhEakp+FK91gWu9xdYSKotoUYX0HO3nEEphGLY2jPfQ2nu0kYJDpoOolsM3OFYJ1aRrE99sCV5ep6ZwsHweIplIfK+1cvMwMSk8CJlrUuEt7IedJHa4xLFEVqtzDMXEbfwBmRz2UlsRou7v5rGruc8pvfGTiGxN92leMCW16E8k8iBDILERSeWRbCNCOkjlk04kiYSYZt050POUJpxkIlGHJuuh8zu0+xB/wkh3aLG8aH2gCkJ1Ea9GqCigQxC1jlk9bmIRgh5KAz4aVj6YHuiHkAaAxCh1Fw2IpCdG4SRLJm8COsWEjmvo2shgPvSJe0ishOQ5dG1o7x0BSyOVE/6KQKab+wb/5SMVWP4aiSLTDV4Nk0pOb/kqCAbygNdMSEW4ry3Badd6bI3WlvA2ahgNbE/JSGzUeCoKVv/6QyTU1tWncw2XVHCbvWTJzbzP9ibrRVvtdyG3N/fmSgiZDna+hGiqK3a1I/cReede6S1wVWnXu7JMZO9KeMdxlct8Gtx1f1l7uM8MzOkLx1qZD0euE+Bt4ciV/c757hfJAc9DhP246GQD+UT4z62OcrKJ5DxAv/lXtmpeO2RNyL2GFAQTv+szR42uMrZxmUGWxY3pI0Z7DpmLy2dylbGrY4auVnScOcUXDhuIu86IYKTPgCD7oyd9eWOk3MCPcJXB2uoyo8YrdLrRnjl8XV1nHL0iDOh/Adf4ZGHD4yMO9yuOP/iI44ndZy3TX3zW4kCd+7lGQUFBQUFBQUHB/44fvNkmpeUoevoAAAAASUVORK5CYII=" alt="UserImage" />
          <div className="newShowStatus"></div>
        </div>
      </div>
      <div className="newCardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="newCardTags">
        <div className="newTags color-grey"><BsExclamationSquareFill /></div>
        {
          tag?.map((elem, index) => {
            return <div key={index} className="newTags color-grey"> <span>•</span> {elem}</div>
          })
        }
      </div>
    </div>
  );
}

export default NewCard;
