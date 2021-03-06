import React from 'react';
import {Heading} from '../../basicComponents';
import {CardTemplate} from '../../basicComponents/CardTemplate';
import {Row} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {mapSportToIcon} from '../../utils/mapper';
import {useGetUserCompetition} from '../../api/userClient_v1';
import defaultCompetitionAvatar from "../../assets/images/default_competition_avatar.jpg";
import {LoadingGif} from "../../basicComponents/LoadingGif";
import {DataLoadingError} from "../../basicComponents/DataLoadingError";

export function UserCompetitionsListCards() {
    let {id_user} = useParams();
    const [competitionState] = useGetUserCompetition(id_user);

    if(competitionState.isLoading) {
        return <LoadingGif />;
    }

    if(!competitionState.isLoading && competitionState.error) {
        return <DataLoadingError />;
    }

    if(!competitionState.isLoading && !competitionState.error && competitionState.user_data.length === 0) {
        return (
            <Heading size="xs" className="alert-info pt-2 pb-2 mt-2 text-center">
                Zatím není členem žádné soutěže
            </Heading>
        );
    }

    return (
        <div>
            {!competitionState.isLoading && !competitionState.error ? (
                <div>
                    <Row>
                        {competitionState.user_data.map((anObjectMapped, index) => (
                            <CardTemplate
                                key={index}
                                redirect={`../competitions/${anObjectMapped.id_competition}`}
                                title={`${anObjectMapped.competition_name}`}
                                subtitle={`Umístění: ${anObjectMapped.team_position}`}
                                tooltipPictureHeader={`${anObjectMapped.sport}`}
                                pictureHeader={mapSportToIcon(anObjectMapped.id_sport)}
                                textHeader={anObjectMapped.is_active === 1 ? ("Probíhá") : ("Ukončená")}
                                mainPicture={anObjectMapped.avatar_url ? (`${anObjectMapped.avatar_url}`) : (defaultCompetitionAvatar)}
                            />
                        ))}
                    </Row>
                </div>
            ) : null}
        </div>
    );
}
