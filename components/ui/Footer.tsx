import SVGPattern4 from '@/app/svg/Pattern4';

const CommonFooter = () => <div className='w-full rounded-tl-[60px] rounded-tr-[60px] bg-[#2A2A2A] flex justify-center items-start'>
    <div className='max-w-1045 flex flex-col space-y-6 justify-center mt-12 mb-24'>
        <div className='text-[3rem] text-[#FAFAFA] text-center font-[200]'>Let's keep in touch</div>
        <ul className='text-[#E1DEC2] flex flex-row justify-between font-[200]'><a>Linkedin</a><a>Resume</a><a>kylingoround@gmail.com</a></ul>
        <div className="w-full mt-[-60px] pt-4">
            <SVGPattern4 />
        </div>
    </div>
</div>

export default CommonFooter