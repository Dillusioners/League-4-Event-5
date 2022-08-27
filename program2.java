/**Hardcoded program 2 of SuperB's league 4 final event by VerifiedAndHacked...*/
class program2{
public static void main(String[] args){
    int[][] acts = {{10,5,6},{8,9,10}};
    
    System.out.println("The richest user has..." + maxWealth(acts));

}
//Takes the multi-D  array as parameter and traverses through the i and j loop to find the value of a[i][j] and returns max value...
public static int maxWealth(int[][] a){
    int maxVal = 0;
    for(int i = 0;i < a.length;i++){
        int sumVal = 0;
        for(int j = 0;j < a[i].length;j++){
            sumVal += a[i][j];
        }
        if(sumVal > maxVal)
            maxVal = sumVal;
    }
    return maxVal;
    }
}