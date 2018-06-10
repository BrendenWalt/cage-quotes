import React,{ Component } from 'react';

class TwitterShare extends Component {
  constructor(props) {
    super(props)

    this.state = {
      twUrl: "https://twitter.com/intent/tweet?text="
    }
  }

  share(quote, source){
    const srcTag = source.split(' ').join('').replace(/[:-;,]/g,'')
    
    const tweetQuery = quote.split(' ').join('+');
    this.setState({
      twUrl: "https://twitter.com/intent/tweet?text=" + tweetQuery + '+%23'+ srcTag + '+%23NicCage+%23CageQuote'
    })
    console.log(srcTag)
  }

  render() {
    return (
      <div className="twitter-wrap">
        <a
          className="twitter-btn twitter-share-button"
          href={this.state.twUrl}
          data-text={this.props.quote.quote}
          // data-size="large"
          // data-dnt="true"
          // data-show-count="false"
          // data-url=""
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => this.share(this.props.quote.quote, this.props.quote.source)}>
          Tweet
        </a>
      </div>
    )
  }
}

export default TwitterShare