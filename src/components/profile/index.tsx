import { Container } from "./style";
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";
import { Link } from "../link";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProfileInfo {
    avatar_url: string | null,
    name: string | null,
    html_url: string | null,
    bio: string | null,
    login: string | null,
    company: string | null,
    followers: number | null,
}

export function Profile () {

    const [ profileInfo, setProfileInfo ] = useState<ProfileInfo | null>(null);

    useEffect(() => {
        axios.get("https://api.github.com/users/Cleidson-Oliveira")
        .then((response) => setProfileInfo(response.data))
    }, [])

    return profileInfo ? (
        <Container>
            {profileInfo.avatar_url && <img src={profileInfo.avatar_url} alt={`${profileInfo.name!}'s profile picture`} />}
            
            <div>
                <header>
                    {profileInfo.name && <h2>{profileInfo.name}</h2>}
                    {profileInfo.html_url && <Link href={profileInfo.html_url}>github <FaExternalLinkAlt /></Link>}
                </header>
                <div>
                    {profileInfo.bio && <p>{profileInfo.bio}</p>}
                </div>
                <footer>
                    {profileInfo.login && <p><FaGithub /> {profileInfo.login}</p>}
                    {profileInfo.company && <p><FaBuilding /> {profileInfo.company}</p>}
                    {profileInfo.followers && <p><FaUserFriends /> {profileInfo.followers} seguidores</p>}
                </footer>
            </div>
        </Container>
    ) : (
        <h1>loading...</h1>
    )
}