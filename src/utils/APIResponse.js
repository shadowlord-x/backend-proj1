class ApiResponse{
  constructor(statusCode, data, message = "Success"){
    this.statusCode=statusCode; //api servers has status Codes, preferrable is >400 is errors
    this.data= data;
    this.message= message;
    this.success= statusCode < 400
  }
}