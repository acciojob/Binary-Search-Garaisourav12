function binarySearch(nums, target) {
// Your code here
// Return index if target is present
// else return -1
	let left = 0;
	let right = nums.length;
	while(left <= right) {
		let mid = Math.floor((left+right)/2);
		if(nums[mid] === target) return mid;
		else if(nums[mid] > target) right = mid;
		else left = mid;
	}
	return -1;
}

module.exports = binarySearch;
