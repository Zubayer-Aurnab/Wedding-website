import { Fade } from "react-reveal";

const Gallery = () => {
    return (


        <>
            <h1 className="text-center font-bold italic text-2xl lg:text-4xl mt-10" >Gallery</h1>

            <div className="grid grid-cols-2  md:grid-cols-4 gap-4 px-2 lg:w-4/5 mx-auto mt-10 lg:mt-24">


                <Fade left>
                    <div className="space-y-4 lg:space-y-8">
                        <img className=" max-w-full rounded-lg " src="https://i0.wp.com/rutheh.com/wp-content/uploads/2017/03/joeandmaura1.jpg?resize=1075%2C1646&ssl=1" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://cdn.shopify.com/s/files/1/0115/1578/9369/files/eucalyptus_480x480.jpg?v=1623366450" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://www.joshuadwain.com/wp-content/uploads/2014/04/joshua-dwain-weddings-gallery-best-wedding-photographers-us-034.jpg" alt="" />




                        <img className=" max-w-full rounded-lg" src="https://media.istockphoto.com/id/1340256496/photo/shot-of-a-young-woman-decorating-a-table-with-place-card-holders-in-preparation-for-a-wedding.jpg?s=612x612&w=0&k=20&c=gBQHa3_HywGsZv4MYRfvMpWAsgLLUkQvyMbG-lHBOSo=" alt="" />



                    </div>


                    <div className="space-y-4 lg:space-y-6">
                        <img className=" max-w-full rounded-lg" src="https://wbwp.s3.us-west-1.amazonaws.com/s3fs-public/styles/5_4/public/carousel/2023-09/finishing-touches-for-bride-in-ornately-furnished-room-with-drapery-paintings-and-chandelier-photo-by-rich-howman_0.jpg?VersionId=BoM00v238ioRED8uhY7RS3Av2nbRxsuP&h=949e0aa7" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://static.wixstatic.com/media/89881a_bde068d155154caeba5a722c332fa389~mv2.jpg/v1/fill/w_1903,h_754,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/89881a_bde068d155154caeba5a722c332fa389~mv2.jpg" alt="" />




                        <img className=" max-w-full rounded-lg" src="https://media.istockphoto.com/id/1064650180/photo/bride-and-groom-saying-vows-during-wedding-ceremony-outdoors.jpg?s=612x612&w=0&k=20&c=WKF6m_t2NcQpcCJMboAnNpBuFGPaJpyOqFAIBc9beg0=" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://images.squarespace-cdn.com/content/v1/611bf42237ef3a0b4eb2e9f2/65a565e5-3d01-4e24-8c5b-9aeab25a91f1/RhapsodyNicole326.jpg" alt="" />

                        <img className=" max-w-full rounded-lg" src="https://static.wixstatic.com/media/ee6212_0754da107ce4458ea02ef5b073358f96~mv2.jpg/v1/fill/w_640,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee6212_0754da107ce4458ea02ef5b073358f96~mv2.jpg" alt="" />
                    </div>
                </Fade>



                <Fade right>
                    <div className="space-y-4 lg:space-y-8">
                        <img className=" max-w-full rounded-lg" src="https://busseltoncateringservice.com/wp-content/uploads/2021/12/wedding-catering_91.webp" alt="" />




                        <img className=" max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://shaadiwish.com/blog/wp-content/uploads/2022/03/26.jpg" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://www.summitimagery.co.uk/wp-content/uploads/2019/09/Why-you-should-hire-both-a-wedding-photographer-and-videographer-for-your-special-day-1.jpg" alt="" />

                        <img className=" max-w-full rounded-lg" src="https://s3.amazonaws.com/artsy-cdn/static/assets/img/wordpress-artifacts/2017/09/18112222/Capture81.jpg" alt="" />
                    </div>


                    <div className="space-y-4 lg:space-y-6">
                        <img className=" max-w-full rounded-lg" src="https://weddingideasmag.telegraph.co.uk/wp-content/uploads/2017/10/110-wedding-entertainment-ideas.jpg" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://www.theknot.com/tk-media/images/4b04652d-a2cb-40ec-8135-8b3255986a0e~rs_768.h-cr_46.0.1342.972" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://images.squarespace-cdn.com/content/v1/53b4a797e4b0cea0a54ca7b8/1452727468617-SDD0ZUDSIFOFNMHS62IA/image-asset.jpeg" alt="" />


                        <img className=" max-w-full rounded-lg" src="https://images-cdn.easyweddings.com.au/s3/prod-ew-image-global-v2/Live/ImageUploader/-supplierprofilelive-photo-31f3c2b6-b71c-4bce-96f3-3d8377ad6deb.jpg?quality=80&format=jpg&mode=crop&autorotate=true&crop=0,0,0,0&width=2048" alt="" />

                        <img className=" max-w-full rounded-lg" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />

                    </div>
                </Fade>



            </div>

        </>




    );
};

export default Gallery;