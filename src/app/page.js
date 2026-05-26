"use client";

import { QRCodeCanvas } from "qrcode.react";
export default function Home() {
  return (
    <main className="page">
      <div className="sideArt sideLeft"></div>
      <div className="sideArt sideRight"></div>

      <section className="hero">
        <div className="logoRow">
          <div className="logoMark">P</div>
          <h2 className="brand">PARASCENE</h2>
        </div>

        <h1>
          PRESS <span>PACK</span>
        </h1>

        <p className="subtitle">AI CREATIVITY PLAYGROUND</p>
        <p className="intro">Everything you need to write about Parascene.</p>

        <div className="scanCard">
          <div>
            <h3>
              SCAN TO <br />
              VIEW OUR <br />
              <span>PRESS PACK</span>
            </h3>
            <p>
              Instant access to our media kit, assets, screenshots and more.
            </p>
            <a href="https://www.parascene.com">www.parascene.com</a>
          </div>

          <div className="qrReal">
            <QRCodeCanvas
              value="https://www.parascene.com"
              size={220}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>
        </div>
      </section>

      <section className="infoPanel">
        <div className="miniCard">
          <h3>About Parascene</h3>
          <p>
            An AI creativity playground for generating bizarre, cinematic and
            experimental media.
          </p>
        </div>

        <div className="miniCard">
          <h3>Media Assets</h3>
          <ul>
            <li>Logos</li>
            <li>App Icons</li>
            <li>Banners</li>
            <li>Screenshots</li>
          </ul>
        </div>

        <div className="miniCard">
          <h3>Videos</h3>
          <ul>
            <li>Demo Trailer</li>
            <li>Feature Videos</li>
            <li>TikTok Clips</li>
          </ul>
        </div>

        <div className="miniCard">
          <h3>Press Releases</h3>
          <p>Latest announcements, updates and official press releases.</p>
        </div>

        <div className="miniCard">
          <h3>Facts & Stats</h3>
          <ul>
            <li>Active Users</li>
            <li>AI Tools</li>
            <li>Supported Models</li>
          </ul>
        </div>
      </section>

      <section className="screenshots">
        <h3>Screenshots</h3>
        <div className="shotGrid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="bottomGrid">
        <div className="largeCard">
          <h3>Founder</h3>
          <p>
            <strong>Harrison</strong>
          </p>
          <p>
            Founder of Parascene. AI creator and developer building tools that
            push imagination.
          </p>
        </div>

        <div className="largeCard">
          <h3>Key Features</h3>
          <ul>
            <li>Text, image, video & audio generation</li>
            <li>Multiple AI models in one place</li>
            <li>Generation and editing tools</li>
            <li>Community sharing</li>
          </ul>
        </div>

        <div className="largeCard">
          <h3>Contact</h3>
          <p>Email: press@parascene.com</p>
          <p>Website: www.parascene.com</p>
          <p>Discord: https://discord.gg/jxWwPAFeZ</p>
        </div>
      </section>

      <footer>
        <strong>PARASCENE</strong>
        <span>IMAGINE WITHOUT LIMITS.</span>
      </footer>
    </main>
  );
}
