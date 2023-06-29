import React, {Component} from 'react';
import Typist from 'react-typist-component';
import FadeInSection from './FadeInSection';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import '../styles/Intro.css';

class Intro extends Component {
    render() {
        return (
            <div id="intro">
                <Typist typingDelay={120} cursor={<span className='cursor'>|</span>}>
                    <span className="intro-title">
                        hi, <span className="intro-name">dayem</span> here.
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">I create cool stuff sometimes.</div>
                    <div className="intro-desc">
                        I'm a software engineer based in Seattle, WA. I am a huge programming
                        nerd, mainly interested in artificial intelligence, mobile development,
                        full-stack development, human-computer interactions, and everything in between.
                    </div>
                    <a href="mailto:dayems123@gmail.com" className="intro-contact" target="_blank">
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" " + "Say Hi!"}
                    </a>
                </FadeInSection>
            </div>
        )
    }
}

export default Intro;
