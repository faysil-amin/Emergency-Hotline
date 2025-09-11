const smsContainer = document.getElementById("sms-notifiction");
const heart = document.querySelectorAll(".heart");
const redLove = document.getElementById("red-love");
const copy = document.getElementsByClassName("copy");
const copyCount = document.getElementById("copy-count");
// coin parseInt
function coinNumber(id) {
  let idSelect = document.getElementById(id).innerText;
  let number = parseInt(idSelect);
  return number;
}

// heart count encrice
let i = 0;
for (const idx of heart) {
  idx.addEventListener("click", () => {
    i++;
    redLove.innerText = i;
  });
}
// call one
document.getElementById("call-one").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling National Emergency service 999`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">National Emergency</h1>
              <p class="text-[#5c5c5c] text-sm">999</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});
// call two
document.getElementById("call-two").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Police 999`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Police</h1>
              <p class="text-[#5c5c5c] text-sm">999</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});
//call three
document.getElementById("call-three").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Fire Service 999`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Fire Service</h1>
              <p class="text-[#5c5c5c] text-sm">999</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

//call four
document.getElementById("call-four").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Ambulance 1994-999999`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">calling Ambulance</h1>
              <p class="text-[#5c5c5c] text-sm">1994-999999</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// call five
document.getElementById("call-five").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Women & Child Helpline 109`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Women & Child Helpline</h1>
              <p class="text-[#5c5c5c] text-sm">109</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// call six
document.getElementById("call-six").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Anti-Corruption Helpline 106`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Anti-Corruption Helpline</h1>
              <p class="text-[#5c5c5c] text-sm">106</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// call seven
document.getElementById("call-seven").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Electricity Outage 16216`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Electricity Outage</h1>
              <p class="text-[#5c5c5c] text-sm">16216</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// call eight
document.getElementById("call-eight").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Brac 16445`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Police</h1>
              <p class="text-[#5c5c5c] text-sm">999</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// call nine
document.getElementById("call-nine").addEventListener("click", () => {
  let coin = coinNumber("coin");
  let coinDicrise = coin - 20;
  if (coinDicrise >= 0) {
    alert(`calling Bangladesh Railway 163`);
    document.getElementById("coin").innerText = coinDicrise;
    let time = new Date().toLocaleTimeString();
    let div = document.createElement("div");
    div.innerHTML = `<div class="py-[16px] flex items-center justify-between gap-1">
            <div>
              <h1 class="text-[#111111] font-semibold text-sm">Bangladesh Railway</h1>
              <p class="text-[#5c5c5c] text-sm">163</p>
            </div>
            <div class="text-sm">
              <p>${time}</p>
            </div>
          </div>`;
    smsContainer.appendChild(div);
    document.getElementById("clear").addEventListener("click", () => {
      div.innerText = "";
    });
    return;
  }
  document.getElementById("coin").innerText = coinDicrise;
  if (coinDicrise < 0) {
    document.getElementById("coin").innerText = "0";
    alert(
      ` You don’t have enough coins. You need at least 20 coins to make a call.`
    );
    return;
  }
});

// challenge part of this assignment
let id = 0;
for (const idx of copy) {
  idx.addEventListener("click", () => {
    id++;
    copyCount.innerText = id;
  });
}
