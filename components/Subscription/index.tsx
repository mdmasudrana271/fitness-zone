

export default function Subscription(){
    return(
        <section className="w-9/12 mx-auto mt-24 py-7 border-[10px] border-dashed overflow-hidden">
            <h1 className="text-2xl text-center text-gray-600 font-semibold">NEWSLETTER SUBSCRIPTION</h1>
            <form action="https://getform.io/f/923d35e5-4392-4fdd-8a69-533de3d72d65" method="POST" className="flex justify-center items-center my-7 lg:flex-row md:gap-0 gap-4 flex-col mx-5">
            <input type="text" name="Name" placeholder="Your Name" className="input input-bordered rounded-none w-full max-w-xs" required />
            <input type="email" name="Email" placeholder="Enter Email" className="input input-bordered rounded-none w-full max-w-xs" required/>
            <button className="btn bg-primaryColor text-white rounded-none border-none">SUBSCRIBE</button>
            </form>
            <p className="text-xs text-center"> Get to know the latest new and offers we provide on this site. we don't spam</p>
        </section>
    )
}   