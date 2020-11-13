
import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
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
                  <label class="label-control" for="gname">Größe</label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control-input"
                    id="gphone"
                    required
                  />
                  <label class="label-control" for="gphone">Lage</label>
                  <div class="help-block with-errors"></div>
                </div>
                {/* <div class="form-group">
                  <input
                    type="text"
                    class="form-control-input"
                    id="gemail"
                    required
                  />
                  <label class="label-control" for="gemail">Maßnahme</label>
                  <div class="help-block with-errors"></div>
                </div> */}
                <div class="form-group">
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
                </div>
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
                    Berechnen
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
            <h2>AL-Rechner</h2>
            <p class="p-heading">
              Nutze unseren Rechner zur Bestimmung der zu erwartenden
              Gemeinwohlprämie und informiere dich über die 19 möglichen
              Maßnahmen der Gemeinwohlprämie.
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
                  <h4>Fill The Form To Start The Procedure</h4>
                  <p>
                    Fill out the Get Quote form and we'll get back to you with
                    our loan calculation procedure or simply call us at +81 720
                    2212
                  </p>
                </div>
              </li>
              <li class="media">
                <div class="circle">2</div>
                <div class="media-body">
                  <h4>It Will Take Up To 3 Days To Qualify</h4>
                  <p>
                    After we've collected all the necessary data from you by
                    phone and email the qualifying process begins
                  </p>
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
                  <h4>We will Call You With The Answer</h4>
                  <p>
                    In most of the cases, if you don't have any bad credit
                    history the loan will be 100% approved by the risk team
                  </p>
                </div>
              </li>
              <li class="media">
                <div class="circle">4</div>
                <div class="media-body">
                  <h4>You Enjoy The Money Submitted</h4>
                  <p>
                    After a positive answer to your request analysis it usually
                    takes no longer than 1 business until you get them
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

    {/* Loan Options */}
    <div id="options" class="cards-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Loan Options</h2>
            <p class="p-heading">
              Need money for your next awesome project? Our product development
              team has assembled the following loan packages you can choose
              from. Click on details for each one of the following options
            </p>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}

        <div class="row">
          <div class="col-lg-12">
            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-1.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Personal Loan</h4>
                <p>
                  Do you want to buy a bicycle, that all new smartphone or even
                  an awesome laptop? This credit is the one to pick
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-1"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-2.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Vehicle Loan</h4>
                <p>
                  It's time to change that old rust bucket you're currently
                  driving. Apply for a vehicle loan and enjoy the new car
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-2"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-3.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">House Loan</h4>
                <p>
                  The family can't fit anymore in that one bedroom flat? Change
                  their lives with a nice new and modern home
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-3"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-4.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Student Loan</h4>
                <p>
                  Have you decided to invest in your education and can't afford
                  the costs? Use the student loan for this purpose
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-4"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-5.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">Travelling Loan</h4>
                <p>
                  Ready to see the world? Pack your bags and go travelling to
                  any destination you desire using our travel loan
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-5"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <img
                class="card-image"
                src="images/vector-card-6.svg"
                alt="alternative"
              />
              <div class="card-body">
                <h4 class="card-title">StartUp Loan</h4>
                <p>
                  Nowadays everyone has a business idea but doesn't have the
                  resources to make it a reality. Now you can realise it
                </p>
                <a class="btn-solid-reg popup-with-move-anim" href="#lightbox-6"
                  >Details</a
                >
              </div>
            </div>
            {/* end of card */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of cards-1 */}
    {/* end of loan options */}

    {/* Loan Options Lightboxes */}
    {/* Details Lightbox */}
    <div id="lightbox-1" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-1.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>Personal Loan</h3>
            <hr />
            <h4>$16.000 max</h4>
            <p>
              Do you want to buy a bicycle, that all new smartphone or even an
              awesome laptop? This credit option will suit you best.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}

    {/* Details Lightbox */}
    <div id="lightbox-2" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-2.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>Vehicle Loan</h3>
            <hr />
            <h4>$38.000 max</h4>
            <p>
              It's time to change that old rust bucket you're currently driving.
              Apply for a vehicle loan and enjoy the car of your dreams.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}

    {/* Details Lightbox */}
    <div id="lightbox-3" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-3.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>House Loan</h3>
            <hr />
            <h4>$280.000 max</h4>
            <p>
              The family can't fit anymore in that one bedroom flat? Change
              their lives with a nice new home and modern appliances.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}

    {/* Details Lightbox */}
    <div id="lightbox-4" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-4.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>Student Loan</h3>
            <hr />
            <h4>$10.000 max</h4>
            <p>
              Have you decided to invest in your education and can't afford the
              costs? Use the student loan for a better future.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}

    {/* Details Lightbox */}
    <div id="lightbox-5" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-5.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>Travelling Loan</h3>
            <hr />
            <h4>$26.000 max</h4>
            <p>
              Ready to see the world? Pack your bags and go travelling to any
              destination you desire using our travelling loan.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}

    {/* Details Lightbox */}
    <div id="lightbox-6" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="container">
        <div class="row">
          <button title="Close (Esc)" type="button" class="mfp-close x-button">
            ×
          </button>
          <div class="col-lg-8">
            <img src="images/lightbox-details-6.jpg" alt="alternative" />
          </div>
          {/* end of col */}
          <div class="col-lg-4">
            <h3>StartUp Loan</h3>
            <hr />
            <h4>$80.000 max</h4>
            <p>
              Nowadays everyone has a business idea but doesn't have the
              resources to make it a reality. We're prepared to fix that.
            </p>
            <ul class="list-unstyled li-space-lg">
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Repayment schedule</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Easy 4 step approval</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Money in the bank</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Credit counselors</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Small interest rates</div>
              </li>
              <li class="media">
                <i class="fas fa-check"></i>
                <div class="media-body">Low income is accepted</div>
              </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#header"
              >Quote</a
            >
            <button class="btn-outline-reg mfp-close as-button" type="button">
              Back
            </button>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of lightbox-basic */}
    {/* end of details lightbox */}
    {/* end of loan options lightboxes */}

    {/* Amount Based */}
    <div class="cards-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Amount Based</h2>
            <p class="p-heading">
              To make it easier for you to decide which is the better option,
              we've organized the loans offering based on maximum amount too.
              It's a lot easier to understand and much easies to make up your
              mind
            </p>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}

        <div class="row">
          <div class="col-lg-12">
            {/* Card */}
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Small Loan</h3>
                <hr class="cell-divide-hr" />
                <p>up to</p>
                <p class="price"><span class="currency">$</span>5000</p>
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Repayment Schedule</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Easy 4 Step Process</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Credit Counselor</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Low Interest Rate</div>
                  </li>
                </ul>
                <a class="btn-solid-reg page-scroll" href="#header">Quote</a>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Medium Loan</h3>
                <hr class="cell-divide-hr" />
                <p>up to</p>
                <p class="price"><span class="currency">$</span>15000</p>
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Money in the bank</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Easy 4 Step Process</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Credit Counselor</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Small Commissions</div>
                  </li>
                </ul>
                <a class="btn-solid-reg page-scroll" href="#header">Quote</a>
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Large Loan</h3>
                <hr class="cell-divide-hr" />
                <p>up to</p>
                <p class="price"><span class="currency">$</span>25000</p>
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Easy 4 Step Process</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Low Interest Rate</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Credit Counselor</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">Repayment Schedule</div>
                  </li>
                </ul>
                <a class="btn-solid-reg page-scroll" href="#header">Quote</a>
              </div>
            </div>
            {/* end of card */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    {/* end of cards-2 */}
    {/* end of amount based */}

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
                Get your preferred loan today and stop dreaming about the things
                you want to do. Turn them into reality with a fast loan from
                Cedo
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

    {/* Description 2 */}
    <div class="tabs">
      <svg
        class="frame-decorative top"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 282.476"
      >
        <title>frame-decorative</title>
        <path
          class="cls-1"
          d="M1920,34.134s-305.408-98.324-689.732,38.78c-223.7,79.8-438.268,102.561-598.78,46.341C480.81,66.481,235,39.793,0,123.939V282.476H1920V34.134Z"
          transform="translate(0 0)"
        />
      </svg>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="tabs-container">
              {/* Tabs Links */}
              <ul class="nav nav-tabs" id="cedoTabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="nav-tab-1"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                    >Quote</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="nav-tab-2"
                    data-toggle="tab"
                    href="#tab-2"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                    >Approval</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="nav-tab-3"
                    data-toggle="tab"
                    href="#tab-3"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                    >Fees</a
                  >
                </li>
              </ul>
              {/* end of tabs links */}

              {/* Tabs Content */}
              <div class="tab-content" id="cedoTabsContent">
                {/* Tab */}
                <div
                  class="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                  aria-labelledby="tab-1"
                >
                  <p>
                    It's very easy to obtain a loan quotation. You just need to
                    fill out the
                    <a class="white page-scroll" href="#header"
                      >Get Quote Form</a
                    >
                    and one of our Credit Counselors will call to assist you in
                    less than 24 hours.
                  </p>
                  <p>
                    You will need to provide some personal details so please
                    make sure you read our terms & conditions and privacy pages.
                  </p>
                  <a
                    class="btn-solid-reg page-scroll"
                    href="terms-conditions.html"
                    >Terms</a
                  >
                  <a
                    class="btn-outline-reg page-scroll"
                    href="privacy-policy.html"
                    >Privacy</a
                  >
                </div>
                {/* end of tab-pane */}
                {/* end of tab */}

                {/* Tab */}
                <div
                  class="tab-pane fade"
                  id="tab-2"
                  role="tabpanel"
                  aria-labelledby="tab-2"
                >
                  <ul class="list-unstyled li-space-lg">
                    <li class="media">
                      <i class="fas fa-home"></i>
                      <div class="media-body">
                        Approval takes no longer than 3 business days and
                        usually customers get a positive answer
                      </div>
                    </li>
                    <li class="media">
                      <i class="fas fa-book"></i>
                      <div class="media-body">
                        Most of the cases with negative answers are due to
                        incorrect personal information sent by customers
                      </div>
                    </li>
                    <li class="media">
                      <i class="fas fa-pencil-alt"></i>
                      <div class="media-body">
                        After the loan approval you will receive the money in
                        your bank account in no more than 10 - 15 days
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end of tab-pane */}
                {/* end of tab */}

                {/* Tab */}
                <div
                  class="tab-pane fade"
                  id="tab-3"
                  role="tabpanel"
                  aria-labelledby="tab-3"
                >
                  <p>
                    Our commissions are the lowest in the market and you can
                    rest assured we're doing our best to keep it that way.
                  </p>
                  <p>
                    Besides low commissions and transfer fees here are the
                    reasons you should choose Cedo as your loan provider:
                  </p>
                  <ul class="list-unstyled li-space-lg">
                    <li class="media">
                      <i class="fas fa-check"></i>
                      <div class="media-body">
                        <strong>Impartiality</strong> and objectiveness
                        regarding social status
                      </div>
                    </li>
                    <li class="media">
                      <i class="fas fa-check"></i>
                      <div class="media-body">
                        <strong>Kind</strong> staff including sympathetic credit
                        counselors
                      </div>
                    </li>
                    <li class="media">
                      <i class="fas fa-check"></i>
                      <div class="media-body">
                        <strong>Low</strong> interest rates according to
                        regulated
                      </div>
                    </li>
                  </ul>
                </div>
                {/* end of tab-pane */}
                {/* end of tab */}
              </div>
              {/* end of tab-content */}
              {/* end of nav tabs content */}
            </div>
            {/* end of tabs-container */}
          </div>
          {/* end of col */}
          <div class="col-lg-6">
            <img
              class="description-image"
              src="images/woman-at-desk.svg"
              alt="alternative"
            />
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
      <svg
        class="frame-decorative bottom"
        data-name="Layer 3"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 282"
      >
        <title>frame-decorative</title>
        <path
          class="cls-1"
          d="M1920,248.341s-305.408,98.324-689.732-38.78C1006.564,129.756,792,107,631.488,163.22,480.81,215.994,235,242.683,0,158.537V0.476H1920V248.341Z"
          transform="translate(0 -0.476)"
        />
      </svg>
    </div>
    {/* end of tabs */}
    {/* end of description 2 */}

    {/* Questions */}
    <div id="questions" class="basic-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Got Questions? Call Us</h2>
            <p class="p-heading">
              Need information about our loaning conditions? Or just a loan
              calculation? Call us! It's very easy to stop dreaming about the
              things you want to do and turn them into reality with Cedo's fast
              loans
            </p>
            <a class="btn-solid-reg page-scroll" href="tel:00817202212"
              ><i class="fas fa-phone"></i>+81 720 2212</a
            >
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
              We're passionate about offering the best financial services at the
              lowest possible cost for the customer. We've been helping people
              for more than 10 years and decided to put together the this video
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
                      Got a personal loan from Cedo and I am very happy with the
                      conditions. I needed a good laptop for school and bought
                      it on credit.
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
                      Awesome conditions for the personal loan. I managed to buy
                      the iPhone I always wanted with a credit from Cedo.
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
                      so I had to take some desperate measures. Now I've bought
                      a new car.
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
                      when I found the right home it was Cedo that supported my
                      decision.
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
              USA <br />Phone: +81 720 2212, Email:
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
                <label class="label-control" for="cname">Name</label>
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control-input"
                  id="cemail"
                  required
                />
                <label class="label-control" for="cemail">Email</label>
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control-textarea"
                  id="cmessage"
                  required
                ></textarea>
                <label class="label-control" for="cmessage">Your message</label>
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group checkbox">
                <input
                  type="checkbox"
                  id="cterms"
                  value="Agreed-to-Terms"
                  required
                />I have read and agree to Ciel's
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
                <a class="white" href="terms-conditions.html"
                  >Terms & Conditions</a
                >,
                <a class="white" href="privacy-policy.html">Privacy Policy</a>,
                <a class="white" href="#your-link"
                  >Institute Of Credit & Loans Control</a
                >, <a class="white" href="#your-link">National Bank</a>
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
              Copyright © 2020 <a href="https://inovatik.com">Inovatik</a> - All
              rights reserved
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
  )
}
