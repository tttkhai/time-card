
interface User {
    firstName: string;
    lastName: string;
}

interface ProfileProps {
    user: User;
}

export function Profile ({user}: ProfileProps) {
    return <div className='profile box'>
            <div>
                <img src="/images/image-jeremy.png" alt="avatar"></img>
            </div>
            <div className="profile-info">
                <div className="report">Report for</div>
                <div className="profile-text"> {user.firstName} {user.lastName}</div>
            </div>
        </div>
}