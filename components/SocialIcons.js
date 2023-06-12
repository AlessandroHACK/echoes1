const SocialIcons = ({Icons}) => {
    return (
    <div className="teat-teal-500">
        {Icons.map(icon => (
            <span key={icon.name} 
                  className="p-2 cursor-pointer inline-flex items-center 
                             rounded-fullbg-gray-700 mx-1.5 text-xl 
                             hover:text-gray-100 hover:bg-teal-500 
                             duration-300">
            <icon name={icon.name}>ICONO</icon>
            </span>
        ))}
    </div>
    )
};

export default SocialIcons;