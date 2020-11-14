export default function Card({ name, category, heading, p, id, handleChange }) {
  return (
    <>
      <div class="card">
        <img
          class="card-image-top"
          src={`images/${category}.jpg`}
          alt="alternative"
        />
        <div class="card-body">
          <br></br>
          <h4 class="card-title">{heading}</h4>
          <br></br>
          <div class="form-group">
            <div class="row d-flex justify-content-center align-items-center">
              <input
                onChange={handleChange}
                id={`card-a-${id}`}
                class="form-control-input"
                placeholder="0"
                name={name}
              ></input>
              <a
                class="btn-solid-reg popup-with-move-anim"
                href="/massnahmen/al-5"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
