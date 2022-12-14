import React from "react";
import '../../styles/Header.css';
import USAflag from '../../images/USAflag.svg';
import SkyLogo from '../../images/SkyLogo.webp';

export default function ChineseHeader() {
    return(
        <div id='header-wrapper-3'>
            <div id='header-wrapper-2'>
                <div id='header-wrapper-1'>
                    <img src={SkyLogo} id='header-logo' />
                    <div id='header-nav'>
                        <a href='../sky-website/' className='header-btn chinese'>主頁</a>
                        <a href='../sky-website/#/about-us' className='header-btn chinese'>關於我們</a>
                        <a href='../sky-website/#/our-team' className='header-btn chinese'>我們的團隊</a>
                        <a href='../sky-website/#/our-classes' className='header-btn chinese'>我們的課程</a>
                        <a href='../sky-website/#/contact-us' className='header-btn chinese'>聯繫我們</a>
                    </div>
                    <div>
                        <a href='../sky-website/#/home/en' id='header-language'>
                        <img className='header-language-flag' src={USAflag} />
                        <div>English</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}