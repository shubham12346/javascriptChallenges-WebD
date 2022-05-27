class Solution {
    public static void main(String[] args) {
        int in[]={2,3,4,5,1};
        int x = findMin(in);
        System.out.println(x);
    }
   
    public static int findMin(int[] nums) {
        if(nums.length==1)return nums[0];
        if(nums[0]< nums[nums.length-1])
        {
            return nums[0];
        }
        int pivot = findPivot(nums);
      return nums[pivot+1];

    }

    public static int findPivot(int nums[]) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if ( nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (mid>start && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            if (nums[mid] < nums[start]) {
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
        return -1;

    }
}