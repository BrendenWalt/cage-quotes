import React, { Component } from 'react';
import Generator from './generator'
import QuoteContainer from './quoteContainer.js'
import TwitterShare from './twitterShare.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      quotes:[
        {
          quote: "Put... the bunny... back... in the box.",
          source:'Con-Air'
        },
        {
          quote: "What's in the bag? A shark or something?",
          source:'The Wicker Man'
        },
        {
          quote: "What do you think I'm gonna do? I'm gonna save the fuckin' day!",
          source: 'Con-Air'
        },
        {
          quote: "Shoot him again... His soul's still dancing.",
          source: 'Bad Lieutenant: Port Of Call'
        },
        {
          quote: "OH, NO! NOT THE BEES! NOT THE BEES! AAAAAHHHHH! OH, THEY'RE IN MY EYES! MY EYES! AAAAHHHHH! AAAAAGGHHH!",
          source: 'The Wicker Man'
        },
        {
          quote: "Well, today's your lucky day, 'cause I brought an eagle.",
          source: 'The Sorcerer\'s Apprentice'
        },
        {
          quote: "You will tell me or I will eat your stinking soul!",
          source: 'Ghost Rider: Spirit of Vengeance'
        },
        {
          quote: "I love pressure. I eat it for breakfast.",
          source: 'The Rock'
        },
        {
          quote: "What are these fuckin' iguanas doing on my coffee table?",
          source: 'Bad Lieutenant: Port Of Call'
        },
        {
          quote: "What's that like? What's it taste like? Describe it like Hemingway.",
          source: 'City of Angels'
        },
        {
          quote: "I want to take his face…off.  Eyes. Nose. Skin. Teeth. It’s coming off.",
          source: 'Face-Off'
        },
        {
          quote: "I picked two things I really like and put them together. Frankenstein and Cadillacs.",
          source: 'Next'
        },
        {
          quote: "Well, Peter Piper picked a pepper, I guess I did!",
          source: 'Valley Girl'
        },
        {
          quote: "How, in the name of Zeus’ butthole, did you get out of your cell?",
          source: 'The Rock'
        },
        {
          quote: "If you dress like Halloween, ghouls will try to get in your pants.",
          source:'Face-Off'
        },
        {
          quote: "I'm a one-man genocide.",
          source: 'Lord of War'
        },
        {
          quote:"Well, Baby-O, it's not exactly mai-thais and yatzee out here but... let's do it!",
          source: "Con Air"
        },
        {
          quote: "Tool up, honey bunny. It's time to get bad guys.",
          source: "Kick Ass"
        },
        {
          quote: "I saw you and you saw me, don’t pretend like you don’t know who I am girly man",
          source: "Snake Eyes"
        },
        {
          quote: "Everything I take is prescription - except for the heroin.",
          source: "Bad Lieutenant: Port Of Call"
        },
        {
          quote: "I just remembered, I have to go into town to pick up your anti-itch cream.",
          source: "The Sorcerer's Apprentice"
        },
        {
          quote: "I never disrobe before gunplay.",
          source: "Drive Angry"
        },
        {
          quote: "I'll be taking these Huggies and whatever cash ya got.",
          source: "Raising Arizona"
        },
        {
          quote: "I told you I'd share my ticket. I never planned on sharing my heart. Maybe I could get lucky twice today.",
          source: "It Could Happen to You"
        },
        {
          quote: "What did I do? You fuck with the bull, you get the horns. That's what I did.",
          source: "Kiss of Death"
        },
        {
          quote: "People don't throw things at me any more. Maybe because I carry a bow around.",
          source: "The Weather Man"
        },

      ],
      backgrounds:[
        "http://stanfordflipside.com/images/278NicCage-1024x469.jpg",
        "https://images.askmen.com/1080x540/2016/11/11-084440-nicolas_cage_life_lessons.jpg",
        "https://amp.businessinsider.com/images/581cd69d46e27a1c008b4cd0-750-375.jpg",
        "https://www.dailydot.com/wp-content/uploads/013/ae/ca69e9edb8c42cc00177f3d807bfe73a.jpg",
        "https://www.screengeek.net/wp-content/uploads/2018/03/nicolas-cage-superman.jpg",
        "http://www.cheatsheet.com/wp-content/uploads/2016/06/Nic-Cage-1024x537.jpg",
        "http://images.indianexpress.com/2018/01/nicolas-cage-759.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/Nicolas-Cage-Vampires-Kiss1.jpg",
        "https://medias.spotern.com/spots/w640/76875.jpg",
        "http://vodzilla.co/wp-content/uploads/2013/08/cage-face-3.png",
        "https://m0.joe.co.uk/wp-content/uploads/2017/07/14164453/1200.jpg",
        "https://hardtickettohomevideo.files.wordpress.com/2013/07/cage-face-2.jpg?w=740",
        "https://i2.wp.com/67.media.tumblr.com/tumblr_l1h32m107J1qbgguvo1_1280.png",
        "https://pmcvariety.files.wordpress.com/2018/01/nicolas-cage-mandy-movie-1.jpg",
        "https://i.ytimg.com/vi/6jyXP-o94y8/maxresdefault.jpg",
        "https://cdn-images-1.medium.com/max/1600/1*tNFOAJnbKnSbhq40cFoe2w.png",
        "https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/o9sslfc3eprwlpp0rimp.jpg",
        "http://cdn.collider.com/wp-content/uploads/2016/06/raising-arizona.png",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/Nicolas-Cage-Vampires-Kiss1.jpg",
        "https://uproxx.files.wordpress.com/2016/11/nic-cage-three-films-seven-days.jpg?quality=95&w=650",
        "https://s3.amazonaws.com/tribeca_cms_production/uploads/article/header_marquee/52cc7644c07f5d20e8000002/large_cagemagic.jpg",
        "https://i0.wp.com/dorkshelf.com/wordpress/wp-content/uploads//2010/11/conair_587x295.jpg?resize=600%2C301",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFLyz-MP7IqtNYe6hbl-7DRc-UtcChb-GPh1bRjWy2KJSocVd",
        "https://cdn-images-1.medium.com/max/1600/1*p16WZS0WkWFEtJIxPILx4A.png",
        "https://i.pinimg.com/originals/25/ac/b9/25acb98d939856c70743861483d471b6.png"
      ],
      selectedQuote:{quote:'Click the button!'},
      selectedBg:"http://cdn.collider.com/wp-content/uploads/2016/06/raising-arizona.png"
    }

    this.randomNumber = this.randomNumber.bind(this)
  }

  randomNumber() {
    const quoteLength = this.state.quotes.length;
    const bgLength = this.state.backgrounds.length;
    const quoteNum = Math.floor(Math.random() * quoteLength)
    const bgNum = Math.floor(Math.random() * bgLength)

    // Set Selection
    const selectedQuote= this.state.quotes[quoteNum]
    const selectedBg = this.state.backgrounds[bgNum]
    this.setState({
      selectedQuote: selectedQuote,
      selectedBg: selectedBg
    })
  }

  render() {
    return (
      <div 
        className="App" 
        style={{ backgroundImage: `url(${this.state.selectedBg})`}}
      >
        <div className="generator-wrapper">
          <h1 className="title">Random Cage Quotes</h1>
          <QuoteContainer quote={this.state.selectedQuote}/>
          <Generator numberSelect={this.randomNumber} />
          <TwitterShare quote={this.state.selectedQuote} />
        </div>
      </div>
    );
  }
}

export default App;
