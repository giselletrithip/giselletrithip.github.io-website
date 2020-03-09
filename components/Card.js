const Card = ({ image, caption }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="/img/profile.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Giselle Trithip</p>
            <p className="subtitle is-6">@giselletrithip</p>
          </div>
        </div>
      </div>
      <div className="card-image">
        <figure className="image ">
          <img
            src={image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <a href="">
                <i className="material-icons">favorite_border</i>
              </a>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="">
                  <i className="material-icons">chat_bubble_outline</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <p>
            <strong>32 Likes</strong>
          </p>
          {caption}
          <a>@bulmaio</a>.<a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
        </div>
      </div>
      <div className="card-footer">
        <div className="columns is-mobile">
          <div className="column is-10">
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Add a comment . . ."
                />
              </div>
            </div>
          </div>
          <div className="column">
            <button className="button">
              <i className="material-icons">more_horiz</i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
      .card {
        margin-top: 1rem;
      }
      .card .header {
        padding: 5px 10px;
      }
      .card-footer .columns {
        width: 100%;
      }
      .card-footer .columns input {
        border: none;
        border-radius: 0;
        box-shadow: none;
      }
      .card-footer .columns .column:last-child {
        display: flex;
        align-items: flex-end;
      }
      .card-footer .columns .column:last-child button {
        border: none;
      }
      `}</style>

    </div>
  );
};

export default Card;
