import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import Placeholder from '../Placeholder/Placeholder';
import Icon from '../Icon/Icon';
import './ProfilePage.css';

function ProfilePage(props) {
  const data = {
    "birthday": "1983-08-11",
    "deathday": null,
    "id": 74568,
    "name": "Chris Hemsworth",
    "also_known_as": [
      "كريس هيمسوورث",
      "크리스 헴스워스",
      "クリス・ヘムズワース",
      "Крис Хемсворт",
      "คริส เฮมส์เวิร์ท",
      "克里斯·海姆斯沃斯",
      "Кріс Гемсворт"
    ],
    "gender": 2,
    "biography": "Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012), Thor: The Dark World (2013) and Avengers: Age of Ultron (2015). He has also appeared in the science fiction action film Star Trek(2009), the thriller adventure A Perfect Getaway (2009), the horror comedy The Cabin in the Woods (2012), the dark fantasy action film Snow White and the Huntsman (2012), the war film Red Dawn (2012) and the biographical sports drama film Rush (2013).\n\nDescription above from the Wikipedia article Chris Hemsworth, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    "popularity": 17.409395,
    "place_of_birth": "Melbourne, Victoria, Australia",
    "profile_path": "/lrhth7yK9p3vy6p7AabDUM1THKl.jpg",
    "adult": false,
    "imdb_id": "nm1165110",
    "homepage": null
  };

  return (
    <div className="col profile-page">
      {data.profile_path ? (
        <LazyLoadImage
          src={`${constants.IMG_BASE}w138_and_h175_face${props.data.profile_path}`}
          alt={props.data.name}
          width="138"
          height="175"
        />) : (
          <Placeholder width="138" height="175" fixedWidth={true} />
        )
      }

      <h1>{data.name}</h1>

      <div className="profile-page__bio">
        <h3>Biography</h3>
        {data.biograhpy}
      </div>

      <div className="profile-page__links">
        {data.homepage &&
          <a href={data.homepage} target="_blank">
            Home page
          </a>
        }

        {data.imdb_id && 
          <a href={`http://www.imdb.com/name/${data.imdb_id}`} target="_blank">
            <Icon name="imdb" width={30} />
          </a>
        }
      </div>

      <div class="profile-page__secondary">
        {data.birthday &&
          <Fragment>
            <h3>Birthday</h3>
            <p>{data.birthday}</p>
          </Fragment>
        }
        {data.deathday &&
          <Fragment>
            <h3>Died</h3>
            <p>{data.deathday}</p>
          </Fragment>
        }
        {data.gender &&
          <Fragment>
            <h3>Gender</h3>
            <p>{data.gender === 1 ? 'Female' : 'Male'}</p>
          </Fragment>
        }
        {data.place_of_birth &&
          <Fragment>
            <h3>Birth place</h3>
            <p>{data.place_of_birth}</p>
          </Fragment>
        }
        {data.popularity &&
          <Fragment>
            <h3>Popularity</h3>
            <p>{data.popularity}</p>
          </Fragment>
        }
      </div>
    </div>
  );
} 

ProfilePage.displayName = 'ProfilePage';

ProfilePage.propTypes = {
  data: PropTypes.shape({
    birthday: PropTypes.string,
    deathday: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    also_known_as: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.number,
    biography: PropTypes.string,
    popularity: PropTypes.number,
    place_of_birth: PropTypes.string,
    profile_path: PropTypes.string,
    adult: PropTypes.bool,
    imdb_id: PropTypes.string,
    homepage: PropTypes.string
  }).isRequired
};

export default ProfilePage;
