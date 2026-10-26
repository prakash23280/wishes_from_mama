import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const birthday = new Date('2026-10-28T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = birthday - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const openSurprise = () => {
    setOpened(true)

    setTimeout(() => {
      document.getElementById('message')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 250)
  }

  return (
    <main className="site">

      {/* HERO */}
      <section className="hero">
        <div className="stars" />

        <div className="computer-window">
          <div className="window-header">
            <span>wishes-from-mama.exe</span>
            <div className="window-controls">
              <span>−</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          <div className="window-body">
            <div className="heart">♥</div>

            <div className="eyebrow">A SPECIAL MESSAGE FOR</div>

            <h1>Bangaru</h1>

            <p className="hero-description">
              Somewhere between all the ordinary days,
              you became my favourite part of life.
            </p>

            <button className="open-button" onClick={openSurprise}>
              {opened ? 'ACCESS GRANTED ♥' : 'OPEN YOUR SURPRISE'}
            </button>

            {opened && (
              <div className="opened-message">
                Welcome, Bangaru...
              </div>
            )}
          </div>
        </div>

        <div className="scroll-hint">
          ↓ SCROLL TO CONTINUE ↓
        </div>
      </section>

      {/* MESSAGE */}
      <section className="message-section" id="message">
        <div className="message-window">
          <div className="message-top">
            <span>message.txt</span>
            <span>FILE 001</span>
          </div>

          <div className="message-content">
            <div className="section-label">FROM MAMA</div>

            <h2>A Little Message</h2>

            <div className="divider" />

            <p className="message-text">
              Bangaru, I don't know exactly when it happened,
              but somewhere along the way you became someone
              incredibly special to me.
            </p>

            <p className="message-text">
              You brought a different kind of happiness into
              my life. The kind that lives in small conversations,
              random laughs, silly moments and simply knowing
              that you are there.
            </p>

            <p className="message-text">
              I may not always have the perfect words,
              but I hope you always know how important you are
              to me.
            </p>

            <p className="message-text">
              And today, I just want to remind you of one thing:
              you are loved, appreciated and incredibly special.
            </p>

            <div className="signature">
              — Mama ❤️
            </div>
          </div>
        </div>
      </section>

      {/* MEMORIES */}
      <section className="memories-section">
        <div className="memories-header">
          <div className="section-label">FILE 002 / OUR MEMORIES</div>
          <h2>Little Moments</h2>
          <p>Some of my favourite moments with you.</p>
        </div>

        <div className="memory-grid">

          <article className="memory-card">
            <div className="photo-frame">
              <img src="/images/memory-01.jpg" alt="A special moment together" />
            </div>
            <div className="memory-info">
              <span>MEMORY_001</span>
              <p>A moment worth remembering.</p>
            </div>
          </article>

          <article className="memory-card">
            <div className="photo-frame">
              <img src="/images/memory-02.jpg" alt="A beautiful moment together" />
            </div>
            <div className="memory-info">
              <span>MEMORY_002</span>
              <p>One of my favourite moments.</p>
            </div>
          </article>

          <article className="memory-card">
            <div className="photo-frame">
              <img src="/images/memory-03.jpg" alt="A happy memory together" />
            </div>
            <div className="memory-info">
              <span>MEMORY_003</span>
              <p>A memory I never want to forget.</p>
            </div>
          </article>

        </div>

        <div className="memory-note">
          <span>+</span> more memories will be added...
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section">
        <div className="journey-header">
          <div className="section-label">FILE 003 / OUR JOURNEY</div>
          <h2>Our Story</h2>
          <p className="journey-intro">
            Some stories are not written all at once.
            They are built one little moment at a time.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-marker">01</div>
            <div className="timeline-card">
              <span className="timeline-date">THE BEGINNING</span>
              <h3>And then there was you...</h3>
              <p>
                One moment, one conversation, one person
                who slowly became someone very special.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">02</div>
            <div className="timeline-card">
              <span className="timeline-date">THE MOMENTS</span>
              <h3>We made memories.</h3>
              <p>
                The laughs, the conversations, the little
                things that made our story ours.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">03</div>
            <div className="timeline-card">
              <span className="timeline-date">TODAY</span>
              <h3>Still choosing you.</h3>
              <p>
                Through ordinary days and special ones,
                I am still grateful that you are part of my life.
              </p>
            </div>
          </div>

          <div className="timeline-item future">
            <div className="timeline-marker">∞</div>
            <div className="timeline-card">
              <span className="timeline-date">THE FUTURE</span>
              <h3>More memories to come.</h3>
              <p>
                This isn't the end of our story.
                It is just another beautiful page.
              </p>
            </div>
          </div>

        </div>

        <div className="journey-footer">
          STATUS: STILL WRITING...
        </div>
      </section>

      {/* WHY I LOVE YOU */}
      <section className="love-section">
        <div className="love-header">
          <div className="section-label">FILE 004 / SYSTEM LOG</div>
          <h2>Why I Love You</h2>
          <p>Some things can't be explained by code.</p>
        </div>

        <div className="reasons-list">

          <article className="reason-card">
            <span className="reason-number">01</span>
            <div>
              <h3>Your Smile</h3>
              <p>
                Somehow your smile can make even an ordinary
                day feel a little more special.
              </p>
            </div>
          </article>

          <article className="reason-card">
            <span className="reason-number">02</span>
            <div>
              <h3>The Way You Are</h3>
              <p>
                I love you for being exactly who you are.
                No pretending, just you.
              </p>
            </div>
          </article>

          <article className="reason-card">
            <span className="reason-number">03</span>
            <div>
              <h3>Our Little Moments</h3>
              <p>
                The small conversations, silly moments and
                memories we created together mean more than you know.
              </p>
            </div>
          </article>

          <article className="reason-card">
            <span className="reason-number">04</span>
            <div>
              <h3>You Feel Like Home</h3>
              <p>
                Somewhere along the way, talking to you started
                feeling like the place where I belong.
              </p>
            </div>
          </article>

          <article className="reason-card special-reason">
            <span className="reason-number">∞</span>
            <div>
              <h3>And So Much More...</h3>
              <p>
                Four reasons are not enough. I could keep writing
                forever, because every day gives me another reason
                to love you.
              </p>
            </div>
          </article>

        </div>

        <div className="love-status">
          <span>LOVE.exe</span>
          <span>STATUS: RUNNING ♥</span>
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="letter-section">
        <div className="letter-window">

          <div className="letter-header">
            <span>love-letter.txt</span>
            <span>FILE 005</span>
          </div>

          <div className="letter-content">
            <div className="section-label">PRIVATE FILE</div>

            <h2>For My Bangaru</h2>

            <div className="letter-line" />

            <p>Dear Bangaru,</p>

            <p>
              If I had to choose one thing I am most thankful
              for, it would be having you in my life.
            </p>

            <p>
              You became a part of my days in a way I never
              expected. And somehow, the days became brighter,
              the moments became more meaningful and life became
              a little more beautiful.
            </p>

            <p>
              I don't promise that every day will be perfect.
              But I promise that I will always treasure the
              beautiful moments we create together.
            </p>

            <p>
              On your birthday, I don't just wish you happiness
              for today. I wish you countless reasons to smile,
              dreams that come true and a future filled with
              everything your heart deserves.
            </p>

            <p>
              And selfishly, I hope I get to be there for
              many of those moments.
            </p>

            <p className="letter-final">
              Happy Birthday, Bangaru. ❤️
            </p>

            <div className="letter-signature">
              Forever yours,<br />
              <strong>Mama</strong>
            </div>
          </div>

        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="birthday-section">
        <div className="birthday-glow" />

        <div className="section-label">SYSTEM EVENT / 28.10.2026</div>

        <h2>Something Special Is Coming...</h2>

        <p className="birthday-intro">
          The system is waiting for your special day.
        </p>

        <div className="countdown">

          <div className="count-box">
            <strong>{String(timeLeft.days).padStart(2, '0')}</strong>
            <span>DAYS</span>
          </div>

          <div className="count-box">
            <strong>{String(timeLeft.hours).padStart(2, '0')}</strong>
            <span>HOURS</span>
          </div>

          <div className="count-box">
            <strong>{String(timeLeft.minutes).padStart(2, '0')}</strong>
            <span>MINUTES</span>
          </div>

          <div className="count-box">
            <strong>{String(timeLeft.seconds).padStart(2, '0')}</strong>
            <span>SECONDS</span>
          </div>

        </div>

        <div className="birthday-date">
          28 • 10 • 2026
        </div>

        <div className="birthday-message">
          <span>EVENT:</span> BANGARU'S BIRTHDAY ♥
        </div>
      </section>

      {/* FINAL */}
      <section className="final-section">

        <div className="final-window">

          <div className="window-header">
            <span>forever.exe</span>
            <div className="window-controls">
              <span>−</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          <div className="final-body">

            <div className="final-heart">♥</div>

            <div className="section-label">FINAL MESSAGE</div>

            <h2>Forever Yours</h2>

            <p>
              No matter how many pages this website has,
              there will never be enough space to write
              everything you mean to me.
            </p>

            <p>
              So I'll keep it simple.
            </p>

            <div className="final-highlight">
              I'm grateful for you.<br />
              I'm happy because of you.<br />
              And I'll always cherish you.
            </div>

            <div className="final-signature">
              — Mama ❤️
            </div>

            <div className="final-status">
              <span>SYSTEM STATUS</span>
              <strong>LOVE: ∞</strong>
            </div>

          </div>

        </div>

        <footer>
          <span>WISHES FROM MAMA</span>
          <span>MADE WITH ♥</span>
        </footer>

      </section>

    </main>
  )
}

export default App
