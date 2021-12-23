import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">The Blogology</span>
      </div>
      <img
        className="headerImg"
        src="https://i0.wp.com/64.media.tumblr.com/608f3eaed9be6adf2f11fecf9a3bbec8/429d89ba1d6790eb-67/s2048x3072_c0,8470,99800,85519/a11ba79f14eeb3af3fa924998d93066308148e91.gif"
        alt=""
      />
    </div>
  );
}
