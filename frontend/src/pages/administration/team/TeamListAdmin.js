import React, {useState} from 'react';
import {NavLink as Link, useHistory} from 'react-router-dom';
import {Heading} from '../../../atoms';
import {Breadcrumb, Button} from "react-bootstrap";
import "react-table/react-table.css";
import {useGetUserOwnedTeams} from "../../../api/userClient_v1";
import {useAuth} from "../../../utils/auth";
import Image from "react-bootstrap/esm/Image";
import loadingGif from "../../../assets/images/loading.gif";
import {Table} from "../../../atoms/Table";
import {TeamCreateModal} from "../../../organisms/team/admin/TeamCreateModal";
import {useApi} from "../../../hooks/useApi";

export function TeamListAdmin() {
    const history = useHistory();
    const {user} = useAuth();
    if (!user) {
        history.replace('/');
    }
    const [state] = useGetUserOwnedTeams(user.id_user);
    const api = useApi();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        {
            Header: 'Název týmu',
            accessor: 'name',
        },
        {
            Header: 'Sport',
            accessor: 'sport',
        },
        {
            Header: 'Typ',
            accessor: 'type',
        },
    ];

    function handleClick(row) {
        if (row) {
            history.push("teams/" + row.original.id_team);
        }
    }

    return (
        <div>
            <Breadcrumb>
                <li className="breadcrumb-item"><Link to="/">Domů</Link></li>
                <li className="breadcrumb-item"><Link to="/administration">Administrace</Link></li>
                <li className="breadcrumb-item"><span className="active">Moje týmy</span></li>
            </Breadcrumb>

            <Heading>Moje týmy</Heading>
            <div className="text-right">
                <Button variant="primary mb-3 pull-right" onClick={handleShow}>
                    <span>Vytvořit tým</span>
                </Button>
            </div>

            {state.isLoading && <div className="text-center"><Image src={loadingGif}/></div>}
            {!state.isLoading && state.error &&
            <Heading size="xs" className="alert-danger pt-2 pb-2 mt-2 text-center">Data se nepodařilo načíst</Heading>}
            {!state.isLoading && !state.error && (
                <Table columns={columns} data={state.teams} filterable={false} showPagination={false}
                       getTdProps={(state, rowInfo) => {
                           return {
                               onClick: () => {
                                   handleClick(rowInfo);
                               }
                           }
                       }}/>
            )}

            <TeamCreateModal show={show} id_user={user.id_user} api={api} handleClose={handleClose}/>
        </div>
    );
}

