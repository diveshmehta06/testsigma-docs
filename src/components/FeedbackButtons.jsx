import React, { Component } from 'react';

class FeedbackButtons extends Component {
  constructor(props) {
      super(props);

      this.state = {
          likeActive: false,
          dislikeActive: false,
      };
  }

  setDislike() {
      this.setState({ dislikeActive: !this.state.dislikeActive });
  }

  setLike() {
      this.setState({ likeActive: !this.state.likeActive });
  }

  LikeEvent = (e) => {
      const path = window.location.href;
      if (this.state.dislikeActive) {
          this.setLike();
          this.setDislike();
      }
      this.setLike();
      if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'Likes', {
              'event_category': 'Docs',
              'event_label': path,
              value: 1
          });
      }
  }

  DislikeEvent = (e) => {
      const path = window.location.href;
      if (this.state.likeActive) {
          this.setDislike();
          this.setLike();
      }
      this.setDislike();
      if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'Dislikes', {
              'event_category': 'Docs',
              'event_label': path,
              value: 1
          });
      }
  }

  render() {
    return (
      <div className="footer_docs">
        <hr />
        <div className="helpfull">
            <h2 className="text_h2">Did you find it helpful?</h2>
            <button className={this.state.likeActive ? "flex likeBtn active" : "flex likeBtn "} onClick={this.LikeEvent} >
                <svg width="22" height="20" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1332 10.3125C20.1332 9.86179 19.9327 9.44177 19.5871 9.13201C19.9789 8.74877 20.1785 8.23499 20.124 7.70027C20.0258 6.747 19.0653 6 17.9362 6H12.7544C13.0111 5.30323 13.4221 4.026 13.4221 3C13.4221 1.37324 11.8761 0 10.9055 0C10.0347 0 9.4114 0.438752 9.38541 0.456752C9.28557 0.528014 9.22769 0.636014 9.22769 0.749991V3.29324L6.81088 7.97252L6.71104 8.01826V7.87499C6.71104 7.66799 6.52311 7.49998 6.29158 7.49998H2.09719C0.940401 7.50002 0 8.34078 0 9.37501V15.375C0 16.4093 0.940401 17.25 2.09719 17.25H4.61384C5.52066 17.25 6.29579 16.7325 6.58772 16.0103C7.2857 16.3313 8.22523 16.5 8.80827 16.5H16.5084C17.4219 16.5 18.2214 15.9495 18.4093 15.1905C18.5057 14.799 18.4496 14.4053 18.2583 14.0633C18.8774 13.785 19.2943 13.2128 19.2943 12.5625C19.2943 12.297 19.2264 12.0428 19.098 11.8133C19.7171 11.5343 20.1332 10.9628 20.1332 10.3125ZM18.364 11.238C18.2021 11.2553 18.0653 11.3535 18.0133 11.4923C17.9622 11.631 18.005 11.7833 18.1241 11.8838C18.3372 12.063 18.4555 12.3045 18.4555 12.5625C18.4555 13.0358 18.0553 13.4333 17.526 13.488C17.3641 13.5053 17.2273 13.6035 17.1753 13.7423C17.1242 13.881 17.167 14.0333 17.2861 14.1338C17.5621 14.3663 17.6728 14.6925 17.5898 15.0285C17.4866 15.447 17.0319 15.7501 16.5084 15.7501H8.80827C8.12709 15.7501 6.98453 15.4643 6.58859 15.1095C6.46861 15.0031 6.28742 14.9716 6.13138 15.0285C5.97452 15.0863 5.87217 15.2236 5.87217 15.375C5.87217 15.9953 5.30761 16.5 4.61384 16.5H2.09719C1.40343 16.5 0.83887 15.9953 0.83887 15.375V9.37501C0.83887 8.75475 1.40343 8.25001 2.09719 8.25001H5.87217V8.62502C5.87217 8.75478 5.94767 8.87551 6.07181 8.94452C6.1943 9.01051 6.34864 9.01726 6.47951 8.96027L7.31838 8.58526C7.40312 8.54775 7.47107 8.48475 7.51133 8.40751L10.028 3.53248C10.0531 3.48298 10.0666 3.42898 10.0666 3.37498V0.95323C10.2411 0.866991 10.5439 0.749991 10.9055 0.749991C11.3652 0.749991 12.5832 1.77149 12.5832 3C12.5832 4.32002 11.7796 6.22275 11.7721 6.24152C11.7234 6.35627 11.7402 6.48603 11.8182 6.58802C11.897 6.68927 12.0262 6.75002 12.1638 6.75002H17.9362C18.6358 6.75002 19.2297 7.19778 19.2884 7.76928C19.3329 8.19678 19.103 8.60329 18.6912 8.83054C18.5628 8.90103 18.4865 9.02854 18.4923 9.16428C18.4982 9.30002 18.5855 9.42152 18.7197 9.48378C19.0745 9.64505 19.2943 9.96304 19.2943 10.3125C19.2943 10.7858 18.8942 11.1833 18.364 11.238Z" fill="black"/>
                </svg>
                <h2 className="yes">
                    Yes
                </h2>
            </button>
            <button className={this.state.dislikeActive ? "flex dislikeBtn active" : "flex dislikeBtn"} onClick={this.DislikeEvent} >
                <svg width="22" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.902852 6.93747C0.902852 7.38821 1.10336 7.80823 1.44896 8.11799C1.05719 8.50123 0.857552 9.015 0.912093 9.54973C1.01024 10.503 1.97078 11.25 3.09989 11.25L8.28167 11.25C8.02497 11.9468 7.61393 13.224 7.61393 14.25C7.61393 15.8768 9.15998 17.25 10.1306 17.25C11.0013 17.25 11.6246 16.8112 11.6506 16.7932C11.7505 16.722 11.8084 16.614 11.8084 16.5L11.8084 13.9568L14.2252 9.27748L14.325 9.23174L14.325 9.37501C14.325 9.58201 14.5129 9.75002 14.7445 9.75002L18.9388 9.75002C20.0956 9.74998 21.036 8.90922 21.036 7.87499L21.036 1.87496C21.036 0.840691 20.0956 -4.01278e-05 18.9388 -4.02182e-05L16.4222 -4.04149e-05C15.5154 -4.04858e-05 14.7403 0.517463 14.4483 1.23972C13.7503 0.918703 12.8108 0.749952 12.2278 0.749952L4.52765 0.749951C3.61411 0.749951 2.81464 1.30046 2.62676 2.05945C2.5303 2.45096 2.58649 2.84471 2.77776 3.18671C2.15866 3.46497 1.74172 4.03721 1.74172 4.68747C1.74172 4.95297 1.80967 5.20722 1.93802 5.43672C1.31893 5.71572 0.902852 6.28722 0.902852 6.93747ZM2.67206 6.01198C2.83395 5.99472 2.97071 5.89649 3.0227 5.75773C3.07386 5.61897 3.03107 5.46674 2.91196 5.36623C2.69887 5.18697 2.58059 4.94548 2.58059 4.68747C2.58059 4.21422 2.98074 3.81671 3.51006 3.76197C3.67195 3.74471 3.80872 3.64648 3.8607 3.50772C3.91186 3.36896 3.86908 3.21673 3.74997 3.11622C3.47396 2.88373 3.36323 2.55748 3.44628 2.22146C3.54946 1.80295 4.00415 1.49994 4.52761 1.49994L12.2278 1.49994C12.909 1.49994 14.0515 1.78569 14.4475 2.14046C14.5674 2.24694 14.7486 2.27844 14.9047 2.22146C15.0615 2.16369 15.1639 2.02644 15.1639 1.87496C15.1639 1.25469 15.7284 0.749952 16.4222 0.749952L18.9388 0.749952C19.6326 0.749952 20.1972 1.25469 20.1972 1.87496L20.1972 7.87499C20.1972 8.49525 19.6326 8.99999 18.9388 8.99999L15.1639 8.99999L15.1639 8.62498C15.1639 8.49522 15.0884 8.37449 14.9642 8.30548C14.8417 8.23949 14.6874 8.23274 14.5565 8.28973L13.7177 8.66474C13.6329 8.70225 13.565 8.76525 13.5247 8.84249L11.0081 13.7175C10.9829 13.767 10.9695 13.821 10.9695 13.875L10.9695 16.2968C10.795 16.383 10.4921 16.5 10.1306 16.5C9.67086 16.5 8.4528 15.4785 8.4528 14.25C8.4528 12.93 9.25644 11.0272 9.26398 11.0085C9.31263 10.8937 9.29588 10.764 9.21786 10.662C9.13902 10.5607 9.0098 10.5 8.87225 10.5L3.09989 10.5C2.40026 10.5 1.80633 10.0522 1.74762 9.48072C1.70315 9.05322 1.93303 8.64671 2.34489 8.41945C2.47324 8.34897 2.54957 8.22145 2.54371 8.08572C2.53785 7.94998 2.45059 7.82848 2.31638 7.76621C1.96154 7.60495 1.74176 7.28696 1.74176 6.93747C1.74172 6.46423 2.14187 6.06672 2.67206 6.01198Z" fill="black"/>
                </svg>
                <h2 className="yes">
                    No
                </h2>
            </button>
        </div>
        <hr/>
      </div>
    )
  }
}

export default FeedbackButtons;