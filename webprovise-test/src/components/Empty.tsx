import CloudDisconnected from '../assets/cloudDisconnect.svg'

const Empty = () => {
    return (
        <div className="flex justify-center items-center flex-col shadow-wp-252 border-wp-96 pt-8 pb-16 w-full border rounded-[4px]">
            <img className=' w-1/4 aspect-square' src={CloudDisconnected} alt="empty" />
            <span className="text-wp-18 leading-wp-18">We could not find weather information for the location above</span>
        </div>
    )
}

export default Empty