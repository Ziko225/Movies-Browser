import { useSelector } from "react-redux";
import {
    selectPage,
    selectPeople,
    selectQuery,
    selectStatus
} from "../../slice";
import { usePageParams } from "../urlParams";
import LoadingPage from "../../../../common/LoadingPage";
import ErrorPage from "../../../../common/ErrorPage";
import NoResultPage from "../../../../common/NoResultPage";
import Container from "../../../../common/Container";
import Pagination from "../../../../common/Pagination";
import PersonCard from "../../../../common/PersonCard";
import { PeopleList } from "../../../../common/styled";
import { apiImageURL } from "../../../../core/configAPI";

const Content = () => {
    const people = useSelector(selectPeople);
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const page = useSelector(selectPage);
    const setPageParams = usePageParams();

    switch (status) {
        case "loading":
            return (
                <Container title={!!query ? `Search results for "${query}"` : " "}>
                    <LoadingPage />
                </Container>
            );
        case "error":
            return (
                <Container>
                    <ErrorPage />
                </Container>
            );
        case "success":
            if (!people) {
                return;
            };

            if (people.results.length === 0) {
                return (
                    <Container title={`Sorry, there are no results for "${query}"`} >
                        <NoResultPage />
                    </Container >
                );
            };

            return (
                <Container title={!!query ? `Search results for "${query}" (${people.total_results})` : "Popular People"}>
                    <PeopleList>
                        {people.results.map((person) => (
                            <PersonCard
                                key={person.id}
                                link={person.id}
                                pictureUrl={person.profile_path ? `${apiImageURL.poster}${person.profile_path}` : null}
                                name={person.name}
                            />
                        ))}
                    </PeopleList>
                    <Pagination
                        setPageParams={setPageParams}
                        page={page}
                        totalPages={people.total_pages}
                    />
                </Container>
            );

        default:
            break;
    };
};

export default Content;