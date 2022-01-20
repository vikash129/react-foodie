#include <iostream>

using namespace std;

class sample {
    int x , y;
    public : 
        void getdata(){
            cout <<"enter value of x = ";
            cin >> x ;
               cout <<"enter value of y = ";
            cin >> y ;
        };
        
        void show(){
            cout << "value of x = " <<x << endl ;
             cout << "value of y = " <<y << endl ;
        };
        
        void operator--(){
            cout << "value of x after decrement : \n" ;
            --x;
        }
        void operator++(){
            cout << "value of x after increment : \n" ;
            ++x;
        }
        
        //to return 
        sample operator+(sample obj){
          sample temp;
          
          temp.x = x + obj.x ; 
               temp.y = y + obj.y ; 
               return temp ;
        };
        
        sample operator-(sample obj){
          sample temp;
          
          temp.x = x - obj.x ; 
               temp.y = y - obj.y ; 
               return temp ;
        };
        
};
int main()
{

    sample obj1 ,obj2,obj3;
    



obj1.getdata();
cout << "object 1 values\n";
    obj1.show();
    
    #include <iostream>

using namespace std;

class sample {
    int x , y;
    public : 
        void getdata(){
            cout <<"enter value of x = ";
            cin >> x ;
               cout <<"enter value of y = ";
            cin >> y ;
        };
        
        void show(){
            cout << "value of x = " <<x << endl ;
             cout << "value of y = " <<y << endl ;
        };
        
         friend sample operator*(sample s1 , sample s2) ; //declare
        
        // void operator--(){
        //     cout << "value of x after decrement : \n" ;
        //     --x;
        // }
        // void operator++(){
        //     cout << "value of x after increment : \n" ;
        //     ++x;
        // }
        
        // //using member function
        // sample operator+(sample obj){
        //   sample temp;
          
        //   temp.x = x + obj.x ; 
        //       temp.y = y + obj.y ; 
        //       return temp ;
        // };
        
        // sample operator-(sample obj){
        //   sample temp;
          
        //   temp.x = x - obj.x ; 
        //       temp.y = y - obj.y ; 
        //       return temp ;
        // };
        
       
        
        
              //using friend function

};

sample operator*(sample s1 , sample s2){
            sample temp;
            temp.x = s1.x * s2.x ;
                temp.y = s1.y * s2.y ;
                return temp;
        };

        
int main()
{

    sample obj1 ,obj2,obj3;
    

obj1.getdata();
cout << "object 1 values\n";
    obj1.show();
    
    obj2.getdata();
    cout << "object 2 values\n";
    obj2.show();
    
    obj3 = obj1 + obj2 ;
    
    cout << "object 3 values\n";
    obj3.show();
    

    
    obj3 = obj1 - obj2 ;
    
    cout << "object 3 values after subtracting\n";
    obj3.show();
    
        
    obj3 = obj1 * obj2 ;
    
    cout << "object 3 values after multiplyind\n";
    obj3.show();
    

    return 0;
}

//operator overloading means applying 
//there are two categories 
//1. unary operator(++ , --)

//binary operator (+ , - , *  , / = , <=)
//      implemented in two ways 
//  1.using normal member function  (takes one parameter ie objecy)
// 2 .usimng friend function it takes 2 parameter as object
