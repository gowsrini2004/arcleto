import Classes from "../components/ThreeDimension.module.css";

function ThreeDimension() {
  return (
    <>
      <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.content}>
            <div className={Classes.title}>
              Shiva as Lord of Dance - Nataraja
            </div>
            <div className={Classes.desc}>
              Period: Chola period (880–1279) <br />
              Culture: Indian (Tamil Nadu) <br />
              Medium: Copper alloy <br />
            </div>
            <div className={Classes.desc}>
              As a symbol, Shiva Nataraja is a brilliant invention. It combines
              in a single image Shiva's roles as creator, preserver, and
              destroyer of the universe and conveys the Indian conception of the
              never-ending cycle of time.
            </div>
          </div>
          <div className={Classes.iframeContainer}>
            <iframe
              src="https://3dviewer.net/embed.html#model=https://dl.dropbox.com/scl/fi/h5wucwz8hlnb0k1t0gity/natu.obj?rlkey=aa8nl8m13cfgbv4hv9mtk2ees&dl=0$camera=-3.84276,-6.95871,-3.72466,-0.13258,-0.66154,-2.65522,-0.22917,-0.03021,0.97292,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=42,43,46,255$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=off,0,0,0,1"
              className={Classes.iframe}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.iframeContainer}>
            <iframe
              src="https://3dviewer.net/embed.html#model=https://dl.dropbox.com/scl/fi/oct39nkcv8ugd96b24g6z/budh.obj?rlkey=qngj4ng1t0aekx3jsq6wc9rx7&dl=0$camera=-1.36417,0.49549,0.57538,0.27698,0.81716,0.47229,0.05706,0.02874,0.99796,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=42,43,46,255$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=off,0,0,0,1"
              className={Classes.iframe}
            ></iframe>
          </div>
          <div className={Classes.content}>
            <div className={Classes.title}>The Awakened-Lord Buddha</div>
            <div className={Classes.desc}>
              Period:Gupta period(563 BCE- 483 BCE) <br />
              Culture:South asia <br />
              Medium:Sandstone and red granite blocks <br />
            </div>
            <div className={Classes.desc}>
              The Buddha, officially titled Phra Phuttha Maha Suwanna Patimakon
              commonly known in Thai as Phra Sukhothai Traimit, is a gold
              Maravijaya Attitude seated Buddharupa statue, with a weight of 5.5
              tonnes (5,500 kilograms).
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.content}>
            <div className={Classes.title}>God of New Beginnings-Pillaiyar</div>
            <div className={Classes.desc}>
              Period: 1st Century <br />
              Culture: Indian (Tamil Nadu) <br />
              Medium:Stone,Marble <br />
            </div>
            <div className={Classes.desc}>
              Ganesha, also spelled Ganesh, and also known as Ganapati,
              Vinayaka, and Pillaiyar, is one of the best-known and most
              worshipped deities in the Hindu pantheon and is the Supreme God in
              the Ganapatya sect. His depictions are found throughout India.
              Hindu denominations worship him regardless of
              affiliations.Devotion to Ganesha is widely diffused and extends to
              Jains and Buddhists and beyond India.
            </div>
          </div>
          <div className={Classes.iframeContainer}>
            <iframe
              src="https://3dviewer.net/embed.html#model=https://dl.dropbox.com/scl/fi/j8nf0ynjugnq4ig0rcf23/pullai2.obj?rlkey=cskg28o0gewsb5uqeqyw2q9xn&dl=0$camera=-0.77554,-0.21141,1.15715,-0.12291,0.37767,-0.01360,0.19750,-0.91549,-0.35054,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=42,43,46,255$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=off,0,0,0,1"
              className={Classes.iframe}
            ></iframe>
          </div>
        </div>
      </div>
      <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.iframeContainer}>
            <iframe
              src="https://3dviewer.net/embed.html#model=https://dl.dropbox.com/scl/fi/wm2c2d8uohg151ibmch1h/Mia_006224_Somaskanda_100k.obj?rlkey=k2u8w6g239jp22zc0c8jdvyd5&dl=0$camera=-3.91301,-0.64127,-1.38386,-3.66855,-0.91983,-2.69349,0.14728,0.97269,-0.17940,45.00000$projectionmode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=42,43,46,255$defaultcolor=200,200,200$defaultlinecolor=100,100,100$edgesettings=off,0,0,0,1"
              className={Classes.iframe}
            ></iframe>
          </div>
          <div className={Classes.content}>
            <div className={Classes.title}>The Rising Sun-Lord Somaskanda</div>
            <div className={Classes.desc}>
              Period: 6th-8th centuries CE <br />
              Culture:Indian
              <br />
              Medium:brass
              <br />
            </div>
            <div className={Classes.desc}>
              Somaskanda is a medieval form of Hindu iconography, a
              representation of Shiva with his consort Uma (Parvati), and their
              son Skanda (Murugan), depicted as a child.This family depiction of
              Shiva originated during the 6th-8th centuries CE during the period
              of the Pallava in South India. The representation shows Shiva with
              four arms and Uma (Parvati), and between them the infant Skanda
              (Murugan) is shown as dancing with ecstasy.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeDimension;
