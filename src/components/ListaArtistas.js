import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src="http://placehold.it/500x500/?text=Imagem%20Não%20Encontrada" alt="Default Placeholder" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{artist.name}</Card.Title>
                    { artist.popularity >= 80 && <Card.Text><small>Hot</small></Card.Text> }
                    { artist.popularity >= 60 && artist.popularity <= 79 && <Card.Text><small>Cool</small></Card.Text> }
                    { artist.popularity >= 30 && artist.popularity <= 59 && <Card.Text><small>Ok</small></Card.Text> }
                    { artist.popularity < 30 && <Card.Text><small>Underground</small></Card.Text> }
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ArtistsList;
