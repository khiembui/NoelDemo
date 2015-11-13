
fuelmanagementApp.controller('fuelTypeController', function ($scope) {
    $scope.aboutdatas =
   [
       {
           image: "../Images/IMG_0189.JPG",
           link: "http://dantri.com.vn",
           title: "test1",
           content: "1(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
       },
       {
           image: "../Images/IMG_0190.JPG",
           link: "http://dantri.com.vn",
           title: "test2",
           content: "2(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
       },
       {
           image: "../Images/IMG_0192.JPG",
           link: "http://dantri.com.vn",
           title: "test3",
           content: "3(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
       },
       {
           image: "../Images/IMG_0191.JPG",
           link: "http://dantri.com.vn",
           title: "test4",
           content: "4(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
       },
       {
           image: "../Images/IMG_0191.JPG",
           link: "http://dantri.com.vn",
           title: "test5",
           content: "5(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
       }

   ];
    $scope.pageClass = 'fuel-type';
    $scope.AddItem = function () {
        debugger;
        var tem = {
            image: "../Images/IMG_0191.JPG",
            link: "http://dantri.com.vn",
            title: "test6",
            content: "6(Dân trí) - Trao đổi với PV Dân trí bên hành lang Quốc hội, ông Vũ Mão, nguyên Chủ nhiệm Văn phòng Quốc hội, nguyên Chủ nhiệm Ủy ban Đối ngoại của Quốc hội đã thẳng thắn bày tỏ quan điểm trước nhiều câu hỏi hóc búa dư luận đặt ra."
        };
        $scope.aboutdatas.push(tem);
    };
});