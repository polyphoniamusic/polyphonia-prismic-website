'use client';

export default function ({openMenu}) {

    return (
        <button className="header-nav-mobile-button" onClick={() => {openMenu()}}>MENU{/* <span>(</span>MENU<span>)</span> */}
            {/*<svg width="56" height="7" viewBox="0 0 56 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="56" y1="0.5" x2="4.37114e-08" y2="0.500005" stroke="white"/>
                <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px">
                <path d="M28,8.5H12a1.5,1.5,0,0,1,0-3H28a1.5,1.5,0,0,1,0,3ZM29.5,16A1.5,1.5,0,0,0,28,14.5H4a1.5,1.5,0,0,0,0,3H28A1.5,1.5,0,0,0,29.5,16Zm0,9A1.5,1.5,0,0,0,28,23.5H12a1.5,1.5,0,0,0,0,3H28A1.5,1.5,0,0,0,29.5,25Z"/>
            </svg>*/}
        </button>
    )
}
