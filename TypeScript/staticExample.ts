class StaticNum
{
    static static_num:number

    static display()
    {
        console.log("Static Number is:"+StaticNum.static_num)
    }
}
StaticNum.static_num=12;
StaticNum.display()

