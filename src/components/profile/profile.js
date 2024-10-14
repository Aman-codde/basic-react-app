import './profile.css';

let user = {
    name: 'Scarlett Johnson',
    imageUrl : 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=is&k=20&c=tw9TuTigzhSlLA_b1Avy0X6GNF9ZFVvgTHIZ9i68Q0I=',
    imageSize: 150
};


export default function Profile(){
    return (
        <>
        <h1>{user.name}</h1>
        <img 
            className="avatar" 
            src={user.imageUrl} 
            alt={'Photo of' + user.name} 
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
        </>
    )
}