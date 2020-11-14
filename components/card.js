export default function Card({
  value,
  category,
  heading,
  p,
  id,
  handleChange,
}) {
  return (
    <>
      <div class="card">
        <img
          class="card-image-top"
          src={`images/${category}.jpg`}
          alt="alternative"
        />
        <div class="card-body">
          <h4 class="card-title">{heading}</h4>
          <p class="card-text">{p}</p>
          <div class="form-group">
            <div class="row d-flex justify-content-center align-items-center">
              <input
                value={value}
                onChange={handleChange}
                id={`card-a-${id}`}
                class="form-control-input"
                placeholder="0"
              ></input>
              <a class="btn-solid-reg popup-with-move-anim">Details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
