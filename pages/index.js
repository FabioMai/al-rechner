import Layout from "../components/layout";
import Card from "../components/card";

import { getSortedPostsData } from "../lib/posts";
import { getCards } from "../lib/cards";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const cards = getCards();
  console.log(cards);
  return (
    <Layout allPostsData={allPostsData}>
      {/* Header */}
      <header id="header" class="header">
        <div class="header-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="text-container">
                  <h1>Berechnung der Gemeinwohl- prämie</h1>
                  <p class="p-large">
                    Allgemeine Beschreibung über das Prinzip und die Zuteilung
                  </p>
                </div>
              </div>
              {/* end of col */}

              <div class="col-lg-6 d-flex align-items-center">
                {/* Get Quote Form */}
                <form
                  id="getQuoteForm"
                  data-toggle="validator"
                  data-focus="false"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-input"
                      id="gname"
                      required
                    />
                    <label class="label-control" for="gname">
                      Ackerland (in ha)
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-input"
                      id="gphone"
                      required
                    />
                    <label class="label-control" for="gphone">
                      Grünland (in ha)
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control-input"
                      id="gemail"
                      required
                    />
                    <label class="label-control" for="gemail">
                      Sonderkulturen (in ha)
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  {/* <div class="form-group">
                  <select class="form-control-select" id="gselect" required>
                    <option class="select-option" value="" disabled selected>
                      Maßnahme
                    </option>
                    <option class="select-option" value="Personal Loan">
                      Personal Loan
                    </option>
                    <option class="select-option" value="Vehicle Loan">
                      Vehicle Loan
                    </option>
                    <option class="select-option" value="House Loan">
                      House Loan
                    </option>
                    <option class="select-option" value="Student Loan">
                      Student Loan
                    </option>
                    <option class="select-option" value="Travel Loan">
                      Travel Loan
                    </option>
                    <option class="select-option" value="StartUp Loan">
                      StartUp Loan
                    </option>
                  </select>
                  <div class="help-block with-errors"></div>
                </div> */}
                  {/* <div class="form-group checkbox">
                  <input
                    type="checkbox"
                    id="gterms"
                    value="Agreed-to-Terms"
                    required
                  />I have read and agree to Cedo's
                  <a class="white" href="privacy-policy.html">Privacy Policy</a>
                  and
                  <a class="white" href="terms-conditions.html"
                    >Terms Conditions</a
                  >
                  <div class="help-block with-errors"></div>
                </div> */}
                  <div class="form-group">
                    <button type="submit" class="form-control-submit-button">
                      Los geht's!
                    </button>
                  </div>
                  <div class="form-message">
                    <div id="gmsgSubmit" class="h3 text-center hidden"></div>
                  </div>
                </form>
                {/* end of get quote form */}
              </div>
              {/* end of col */}
            </div>
            {/* end of row */}
          </div>
          {/* end of container */}
        </div>
      </header>
      {/* end of header */}

      {/* Approval */}
      <div id="approval" class="basic-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>GEMEINWOHL-BILANZ</h2>
              <p class="p-heading">
                Nutze den Gemeinwohl-Bilanz-Rechner zur Bestimmungder zu
                erwartenden EU-Subventionen.
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
          <div class="row">
            <div class="col-lg-6">
              <ul class="list-unstyled li-space-lg first">
                <li class="media">
                  <div class="circle">1</div>
                  <div class="media-body">
                    <h4>Ausgangssituation bestimmen</h4>
                    <p>
                      Trage die aktuellen Maßnahmen mit der Größe der Fläche
                      ein.
                    </p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle">2</div>
                  <div class="media-body">
                    <h4>Geplante Verbesserungen eintragen</h4>
                    <p>Welche Maßnahmen sind geplant?</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* end of col */}
            <div class="col-lg-6">
              <ul class="list-unstyled li-space-lg second">
                <li class="media">
                  <div class="circle">3</div>
                  <div class="media-body">
                    <h4>Bilanz optimieren</h4>
                    <p>
                      Dir ist Artenvielfalt, Klima- und Wasserschutz wichtig?
                      Optimiere die Einstellungen und lass dich überraschen.
                    </p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle">4</div>
                  <div class="media-body">
                    <h4>Ergebnis exportieren</h4>
                    <p>
                      Nutze dein Ergebnis für die Beantragung der Förderung und
                      für die Lohnsteuer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-1 */}
      {/* end of approval */}

      {/* Ausgangssituation */}
      <div id="ausgang" class="cards-1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Ausgangssituation</h2>
              <p class="p-heading">todo Beschreibung?</p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}

          <div class="row">
            <div class="col-lg-12 d-flex flex-wrap">
              {cards.map((card) => (
                <Card
                  category={card.category}
                  heading={card.heading}
                  p={card.p}
                  id={cards.indexOf(card)}
                ></Card>
              ))}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of cards-1 */}
      {/* end of loan options */}

      {/* Maßnahmen */}
      <div id="massnahme" class="cards-1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Maßnahmen</h2>
              <p class="p-heading">todo Beschreibung?</p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}

          <div class="row">
            <div class="col-lg-12 d-flex flex-wrap">
              {cards.map((card) => (
                <Card
                  category={card.category}
                  heading={card.heading}
                  p={card.p}
                  id={cards.indexOf(card)}
                ></Card>
              ))}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of cards-1 */}
      {/* end of loan options */}

      {/* Description 1 */}
      <div id="description" class="slider-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              {/* Image Slider */}
              <div class="slider-container">
                <div class="swiper-container image-slider">
                  <div class="swiper-wrapper">
                    {/* Slide */}
                    <div class="swiper-slide">
                      <div class="image-container">
                        <a class="popup-link" href="images/slide-1.jpg">
                          <img
                            class="img-fluid"
                            src="images/slide-1.jpg"
                            alt="alternative"
                          />
                        </a>
                      </div>
                    </div>
                    {/* end of slide */}

                    {/* Slide */}
                    <div class="swiper-slide">
                      <div class="image-container">
                        <a class="popup-link" href="images/slide-2.jpg">
                          <img
                            class="img-fluid"
                            src="images/slide-2.jpg"
                            alt="alternative"
                          />
                        </a>
                      </div>
                    </div>
                    {/* end of slide */}

                    {/* Slide */}
                    <div class="swiper-slide">
                      <div class="image-container">
                        <a class="popup-link" href="images/slide-3.jpg">
                          <img
                            class="img-fluid"
                            src="images/slide-3.jpg"
                            alt="alternative"
                          />
                        </a>
                      </div>
                    </div>
                    {/* end of slide */}
                  </div>
                  {/* end of swiper-wrapper */}

                  {/* Add Arrows */}
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                  {/* end of add arrows */}
                </div>
                {/* end of swiper-container */}
              </div>
              {/* end of slider-container */}
              {/* end of image slider */}
            </div>
            {/* end of col */}

            <div class="col-lg-6">
              <div class="text-container">
                <h2>Now Is The Perfect Time For The Short Term Loan</h2>
                <p>
                  Get your preferred loan today and stop dreaming about the
                  things you want to do. Turn them into reality with a fast loan
                  from Cedo
                </p>
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Low interest rates guaranteed by the central bank
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Reduced commissions due to high competition
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Simplified analysis and approval process
                    </div>
                  </li>
                </ul>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of slider-1 */}
      {/* end of description 1 */}

      {/* Questions */}
      <div id="questions" class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Got Questions? Call Us</h2>
              <p class="p-heading">
                Need information about our loaning conditions? Or just a loan
                calculation? Call us! It's very easy to stop dreaming about the
                things you want to do and turn them into reality with Cedo's
                fast loans
              </p>
              <a class="btn-solid-reg page-scroll" href="tel:00817202212">
                <i class="fas fa-phone"></i>+81 720 2212
              </a>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-2 */}
      {/* end of questions */}

      {/* About */}
      <div id="about" class="basic-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>About Cedo</h2>
              <p class="p-heading">
                We're passionate about offering the best financial services at
                the lowest possible cost for the customer. We've been helping
                people for more than 10 years and decided to put together the
                this video
              </p>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.youtube.com/embed/Ey1lkwYGSC0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-3 */}
      {/* end of about */}

      {/* Testimonials */}
      <div class="slider-2">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Customer Testimonials</h2>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
        <div class="container">
          <div class="row">
            {/* Card Slider */}
            <div class="swiper-container card-slider">
              <div class="swiper-wrapper">
                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-1.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        Got a personal loan from Cedo and I am very happy with
                        the conditions. I needed a good laptop for school and
                        bought it on credit.
                      </p>
                      <p class="testimonial-author">Jude Thorn</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-2.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        Awesome conditions for the personal loan. I managed to
                        buy the iPhone I always wanted with a credit from Cedo.
                        Amazing!
                      </p>
                      <p class="testimonial-author">Roy Smith</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-3.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        I recommend Cedo's personal loan to everyone in need for
                        some quick cash. I got out of a very tight situation
                        thanks to their loans.
                      </p>
                      <p class="testimonial-author">Marsha Singer</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-4.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        It's been my life long dream to travel around the world
                        but never had the financial resources to actually do it.
                        Now it's possible!
                      </p>
                      <p class="testimonial-author">Lindsay Rune</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-5.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        My car stopped working exactly when I needed it the most
                        so I had to take some desperate measures. Now I've
                        bought a new car.
                      </p>
                      <p class="testimonial-author">Ronald Spice</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img
                      class="card-image rounded-circle"
                      src="images/person-face-6.png"
                      alt="alternative"
                    />
                    <div class="card-body">
                      <p class="testimonial-text">
                        I've been looking for a new house for about 5 years and
                        when I found the right home it was Cedo that supported
                        my decision.
                      </p>
                      <p class="testimonial-author">Ann Black</p>
                    </div>
                  </div>
                </div>
                {/* end of swiper-slide */}
                {/* end of slide */}
              </div>
              {/* end of swiper-wrapper */}

              {/* Add Pagination */}
              <div class="swiper-pagination"></div>
              {/* end of add pagination */}
            </div>
            {/* end of swiper-container */}
            {/* end of card slider */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of slider-2 */}
      {/* end of testimonials */}

      {/* Contact */}
      <div id="contact" class="form">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Contact Info</h2>
              <p class="p-heading">
                Address: 22 Innovative Area, San Francisco, Bay Area, CA 94043,
                USA <br />
                Phone: +81 720 2212, Email:
                <a href="mailto:office@cedoloans.com">office@cedoloans.com</a>,
                Web: <a href="#your-link">www.cedoloans.com</a>
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}

          <div class="row">
            <div class="col-lg-6">
              <div class="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sro!4v1498231462606"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            {/* end of col */}
            <div class="col-lg-6">
              {/* Contact Form */}
              <form id="contactForm" data-toggle="validator" data-focus="false">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control-input"
                    id="cname"
                    required
                  />
                  <label class="label-control" for="cname">
                    Name
                  </label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control-input"
                    id="cemail"
                    required
                  />
                  <label class="label-control" for="cemail">
                    Email
                  </label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control-textarea"
                    id="cmessage"
                    required
                  ></textarea>
                  <label class="label-control" for="cmessage">
                    Your message
                  </label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group checkbox">
                  <input
                    type="checkbox"
                    id="cterms"
                    value="Agreed-to-Terms"
                    required
                  />
                  I have read and agree to Ciel's
                  <a href="privacy-policy.html">Privacy Policy</a> and
                  <a href="terms-conditions.html">Terms Conditions</a>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control-submit-button">
                    Submit
                  </button>
                </div>
                <div class="form-message">
                  <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                </div>
              </form>
              {/* end of contact form */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of form */}
      {/* end of contact */}

      {/* Footer */}
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="footer-col first">
                <h5>About Cedo</h5>
                <p class="p-small">
                  We're passionate about offering the best financial services to
                  our loyal customers
                </p>
              </div>
            </div>
            {/* end of col */}
            <div class="col-md-4">
              <div class="footer-col second">
                <h5>Important Links</h5>
                <p class="p-small">
                  <a class="white" href="terms-conditions.html">
                    Terms & Conditions
                  </a>
                  ,
                  <a class="white" href="privacy-policy.html">
                    Privacy Policy
                  </a>
                  ,
                  <a class="white" href="#your-link">
                    Institute Of Credit & Loans Control
                  </a>
                  ,{" "}
                  <a class="white" href="#your-link">
                    National Bank
                  </a>
                </p>
              </div>
            </div>
            {/* end of col */}
            <div class="col-md-4">
              <div class="footer-col third">
                <h5>Social Media</h5>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-linkedin-in fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-dribbble fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of footer */}
      {/* end of footer */}

      {/* Copyright */}
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p class="p-small">
                Copyright © 2020 <a href="https://inovatik.com">Inovatik</a> -
                All rights reserved
              </p>
            </div>
            {/* end of col */}
          </div>
          {/* enf of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of copyright */}
      {/* end of copyright */}
    </Layout>
  );
}
