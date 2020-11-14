import Layout from "../components/layout";
import Card from "../components/card";
import { useState } from "react";

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
  const optArray = [
    "Vögel",
    "Säugetiere",
    "Reptilien",
    "Amphibien",
    "Insekten",
    "Bestäuber",
    "Wildpflanzen Acker",
    "Wildpflanzen Grünland",
    "Klimaschutz",
    "Wasserschutz",
  ];
  const [state, setState] = useState({
    punkte: 0,
    euro: 0,
    euroha: 0,
    aal1: "0",
    aal2: "1",
    mal1: "",
    mal2: "",
    optimierung: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const cards = getCards();

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

      {/* Intro */}
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
              <h2>1) Ausgangssituation</h2>
              <p class="p-heading">todo Beschreibung?</p>
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}

          <div class="row">
            <div class="col-lg-12 d-flex flex-wrap">
              {cards.map((card) => (
                <Card
                  value={state[card.name]}
                  category={card.category}
                  heading={card.heading}
                  p={card.p}
                  id={cards.indexOf(card)}
                  handleChange={handleChange}
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
              <h2>2) Maßnahmen</h2>
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

      <div id="fixed-footer">
        {/* <h3>
          {state.punkte} Punkte - {state.euro} € - {state.euroha} €/ha
        </h3> */}
        <div id="score" class="card">
          <h3>
            {state.punkte} Punkte - {state.euro} € - {state.euroha} €/ha
          </h3>
        </div>
        {state.optimierung.map((value, index) => (
          <div class="card">
            <h1>{value}%</h1>
            <h5>{optArray[index]}</h5>
          </div>
        ))}
      </div>

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

      {/* About */}
      <div id="about" class="basic-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Über den Gemeinwohl-Bilanz Rechner</h2>
              <p class="p-heading">
                Dieses Projekt ensteht als Teil des Hackathons "Innovation
                Challenge #FutureTech4Climate" als Teil der
                Biodiversitäts-Challenge des Zentrum Digitalisierung Bayern.
              </p>
              {/* <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.youtube.com/embed/Ey1lkwYGSC0"
                  allowfullscreen
                ></iframe>
              </div> */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of basic-3 */}
      {/* end of about */}

      {/* Footer */}
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="footer-col first">
                <h5>Gemeinwohl-Bilanz</h5>
                <p class="p-small">Letztes Update: 15.11.2020</p>
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
                Copyright © 2020 Thomas Schwab, Fabio Maienschein
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
