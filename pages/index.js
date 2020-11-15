import Layout from "../components/layout";
import Card from "../components/card";
import { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas,
} from "react-vis";

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
  const [state, setState] = useState({
    acker: 0,
    gruen: 0,
    sonder: 0,
    aal1: 0,
    aal2: 0,
    aal3: 0,
    aal5: 0,
    mal1: 0,
    mal2: 0,
    mal3: 0,
    mal5: 0,
    klima1: 0,
    klima2: 0,
    wasser1: 0,
    wasser2: 0,
    bio1: 0,
    bio2: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
    console.table(state);
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
                  {/* <p class="p-large">
                    Allgemeine Beschreibung über das Prinzip und die Zuteilung
                  </p> */}
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
                      onChange={handleChange}
                      name="acker"
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
                      onChange={handleChange}
                      name="gruen"
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
                      onChange={handleChange}
                      name="sonder"
                      required
                    />
                    <label class="label-control" for="gemail">
                      Sonderkulturen (in ha)
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <a class="btn-solid-reg page-scroll" href="#approval">
                      Los geht's!
                    </a>
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
                    <h4>
                      <u>Ausgangssituation bestimmen</u>
                    </h4>
                    <p>
                      Trage die aktuellen Maßnahmen mit der Größe der Fläche
                      ein.
                    </p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle">2b</div>
                  <div class="media-body">
                    <h4>
                      <u>Bilanz optimieren</u>
                    </h4>
                    <p>
                      Dir ist Artenvielfalt, Klima- und Wasserschutz wichtig?
                      Optimiere die Einstellungen und lass dich überraschen.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* end of col */}
            <div class="col-lg-6">
              <ul class="list-unstyled li-space-lg second">
                <li class="media">
                  <div class="circle">2a</div>
                  <div class="media-body">
                    <h4>
                      <u>Geplante Verbesserungen eintragen</u>
                    </h4>
                    <p>Welche Maßnahmen sind geplant?</p>
                  </div>
                </li>
                <li class="media">
                  <div class="circle">3</div>
                  <div class="media-body">
                    <h4>
                      <u>Ergebnis exportieren</u>
                    </h4>
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

      <div id="tabs" class="container">
        <div class="row">
          <div class="col-xs-12 ">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <h3>1) Ausgangssituation</h3>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <h3>2) Maßnahmen</h3>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <h3>3) Export</h3>
                </a>
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {/* Ausgangssituation */}
                <div id="ausgang" class="cards-1">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h2>1) Ausgangssituation</h2>
                        <p class="p-heading">
                          Erfasse hier die aktuelle Nutzung
                        </p>
                      </div>
                      {/* end of col */}
                    </div>
                    {/* end of row */}

                    <div class="row">
                      <div class="col-lg-12 d-flex flex-wrap">
                        {cards.map((card) => (
                          <Card
                            name={`a${card.name}`}
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
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {/* Maßnahmen */}
                <div id="massnahme" class="cards-1">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h2>2) Maßnahmen</h2>
                        <p class="p-heading">
                          Erfasse hier die geplanten Maßnahmen
                        </p>
                      </div>
                      {/* end of col */}
                    </div>
                    {/* end of row */}

                    <div class="row">
                      <div class="col-lg-12 d-flex flex-wrap">
                        {cards.map((card) => (
                          <Card
                            name={`m${card.name}`}
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
              </div>
              <div
                class="tab-pane fade d-flex align-items-center"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div class="container cards-1">
                  <div class="row">
                    <div class="col-md-12">
                      <h2>3) Export</h2>
                      <p>
                        Hier kannst du deine festgehaltenen Eingaben und die
                        daraus errechneten Förderbeträge exportieren lassen.
                      </p>
                      <br></br>
                      <a
                        class="btn-solid-reg popup-with-move-anim"
                        href="/Gemeinwohl-Bilanz.xslx"
                        download
                      >
                        Exportieren
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fixed-footer">
        {/* <h3>
          {state.punkte} Punkte - {state.euro} € - {state.euroha} €/ha
        </h3> */}
        <div class="card score d-flex flex-row">
          <div id="bilanz" class="col-lg-4 d-flex flex-column">
            <h2>Zwischenbilanz</h2>
            <h4>
              {state.aal1 +
                state.aal2 +
                (state.aal5 + state.mal5) * 10 +
                (state.aal3 + state.mal3) * 2 +
                state.mal1 +
                state.mal2}{" "}
              Punkte
            </h4>
            <h4>
              {(state.aal1 +
                state.aal2 +
                (state.aal5 + state.mal5) * 10 +
                (state.aal3 + state.mal3) * 2 +
                state.mal1 +
                state.mal2) *
                50}{" "}
              €
            </h4>
            <h4>
              {(
                ((state.aal1 +
                  state.aal2 +
                  (state.aal5 + state.mal5) * 10 +
                  (state.aal3 + state.mal3) * 2 +
                  state.mal1 +
                  state.mal2) *
                  50) /
                (state.aal1 +
                  state.aal2 +
                  state.aal3 +
                  state.aal5 +
                  state.mal1 +
                  state.mal2 +
                  state.mal3 +
                  state.mal5)
              ).toFixed(2)}{" "}
              €/ha
            </h4>
          </div>
          <div class="col-lg-8">
            <XYPlot
              margin={{ left: 200 }}
              width={700}
              height={200}
              stackBy="x"
              yType="ordinal"
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <HorizontalBarSeries
                data={[
                  {
                    y: "Wirkung auf Biodiversität",
                    x:
                      (10 * state.aal5 * (state.aal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                  {
                    y: "Wirkung auf Wasserschutz",
                    x:
                      (10 * state.aal5 * (state.aal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                  {
                    y: "Wirkung auf Klimaschutz",
                    x:
                      (10 * state.aal5 * (state.aal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                ]}
              />
              <HorizontalBarSeries
                data={[
                  {
                    y: "Wirkung auf Biodiversität",
                    x:
                      (10 * state.mal5 * (state.mal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                  {
                    y: "Wirkung auf Wasserschutz",
                    x:
                      (10 * state.mal5 * (state.mal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                  {
                    y: "Wirkung auf Klimaschutz",
                    x:
                      (10 * state.mal5 * (state.mal5 / 3)) /
                      (((122 / 3) *
                        (state.acker + state.gruen + state.sonder)) /
                        100),
                  },
                ]}
              />
              <HorizontalBarSeries
                data={[
                  {
                    y: "Wirkung auf Biodiversität",
                    x:
                      100 -
                      (10 * state.aal5 * (state.aal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100) -
                      (10 * state.mal5 * (state.mal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100),
                  },
                  {
                    y: "Wirkung auf Wasserschutz",
                    x:
                      100 -
                      (10 * state.aal5 * (state.aal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100) -
                      (10 * state.mal5 * (state.mal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100),
                  },
                  {
                    y: "Wirkung auf Klimaschutz",
                    x:
                      100 -
                      (10 * state.aal5 * (state.aal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100) -
                      (10 * state.mal5 * (state.mal5 / 3)) /
                        (((122 / 3) *
                          (state.acker + state.gruen + state.sonder)) /
                          100),
                  },
                ]}
              />
            </XYPlot>
          </div>
        </div>
      </div>

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
