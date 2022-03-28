import Grid from '@material-ui/core/Grid';
import './results.css';

// Class name image is in react bootstrap

const FirstPlace = ({ firstResult }) => (
    <>
        <Grid container>
            <Grid item sm={6} className="horizontalcenter">
                <img
                    className="results_image"
                    src={firstResult.food.photos[0]}
                    alt="restaurant food"
                />
            </Grid>
            <Grid item sm={6}>
                <div className="block">
                    <h1>
                        1.
                        {' '}
                        {firstResult.food.name}
                    </h1>
                    <p>{firstResult.food.address}</p>
                </div>
                <h2>
                    Suckers who voted
                </h2>
                <p>
                    Who voted:
                    {firstResult.voted_users}
                </p>
                <br />
                <button type="button">Share</button>

                {/* {first_results.food.voted_users.map((voters, id) => (
          <h3>{voters}</h3>
        ))} */}
            </Grid>
        </Grid>
    </>
);

export default FirstPlace;
