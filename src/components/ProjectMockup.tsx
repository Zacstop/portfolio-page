// 실제 스크린샷이 들어오기 전까지 보여줄 CSS-rendered placeholder mockup.
// projects.ts의 images 배열에 실제 src를 채우면 자동으로 <img>가 위에 덮어쓰는 구조.

type Kind = "envelopes" | "sulegym" | "kb" | "hanmi";

function EnvelopesMock() {
  return (
    <div className="shot-mock envelopes" aria-hidden>
      <div className="topbar">
        <div className="logo" />
        <div className="title">SAMS Admin</div>
        <div className="breadcrumb">
          <div className="crumb">Dashboard</div>
          <div className="crumb">Plant 04</div>
        </div>
      </div>
      <div className="sidebar">
        <div className="item active" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
      <div className="main">
        <div className="kpi">
          <div className="lbl">발전량</div>
          <div className="val">2.4 MWh</div>
        </div>
        <div className="kpi">
          <div className="lbl">가동률</div>
          <div className="val">98.2%</div>
        </div>
        <div className="kpi">
          <div className="lbl">사이트</div>
          <div className="val">14</div>
        </div>
        <div className="kpi">
          <div className="lbl">알람</div>
          <div className="val">3</div>
        </div>
        <div className="chart" />
        <div className="table">
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <div className="row" />
        </div>
      </div>
    </div>
  );
}

function SulegymMock() {
  return (
    <div className="shot-mock sulegym" aria-hidden>
      <div className="phone tertiary">
        <div className="header">
          <div className="greet">설레짐</div>
          <div className="avatar" />
        </div>
        <div className="checkin">
          <div className="lbl">RANK</div>
          <div className="val">#42</div>
        </div>
        <div className="feed">
          <div className="item"><div className="dot" /><div className="bar" /></div>
          <div className="item"><div className="dot" /><div className="bar" /></div>
        </div>
        <div className="tabbar">
          <div className="tab" />
          <div className="tab active" />
          <div className="tab" />
          <div className="tab" />
        </div>
      </div>
      <div className="phone">
        <div className="header">
          <div className="greet">CHECK-IN</div>
          <div className="avatar" />
        </div>
        <div className="checkin">
          <div className="lbl">TODAY · 강남점</div>
          <div className="val">42:18</div>
        </div>
        <div className="feed">
          <div className="item"><div className="dot" /><div className="bar" /></div>
          <div className="item"><div className="dot" /><div className="bar" /></div>
          <div className="item"><div className="dot" /><div className="bar" /></div>
        </div>
        <div className="tabbar">
          <div className="tab active" />
          <div className="tab" />
          <div className="tab" />
          <div className="tab" />
        </div>
      </div>
      <div className="phone secondary">
        <div className="header">
          <div className="greet">FEED</div>
          <div className="avatar" />
        </div>
        <div className="checkin">
          <div className="lbl">MATE</div>
          <div className="val">+ 3</div>
        </div>
        <div className="feed">
          <div className="item"><div className="dot" /><div className="bar" /></div>
          <div className="item"><div className="dot" /><div className="bar" /></div>
        </div>
        <div className="tabbar">
          <div className="tab" />
          <div className="tab" />
          <div className="tab active" />
          <div className="tab" />
        </div>
      </div>
    </div>
  );
}

function KbMock() {
  return (
    <div className="shot-mock kb" aria-hidden>
      <div className="topbar">
        <div className="brand">KB생명보험</div>
        <div className="nav-item active">영업관리자</div>
        <div className="nav-item">FP관리</div>
        <div className="nav-item">실적</div>
        <div className="nav-item">일정</div>
      </div>
      <div className="sidebar">
        <div className="menu active" />
        <div className="menu" />
        <div className="menu" />
        <div className="menu" />
        <div className="menu" />
        <div className="menu" />
      </div>
      <div className="main">
        <div className="filter-row">
          <div className="pill" />
          <div className="pill" />
          <div className="pill primary" />
        </div>
        <div className="grid">
          <div className="head" />
          <div className="row" /><div className="row" /><div className="row" />
          <div className="row" /><div className="row" /><div className="row" />
          <div className="row" /><div className="row" /><div className="row" />
        </div>
      </div>
    </div>
  );
}

function HanmiMock() {
  return (
    <div className="shot-mock hanmi" aria-hidden>
      <div className="topbar">
        <div className="brand">의담 ADMIN</div>
        <div className="tab active">세미나</div>
        <div className="tab">교육</div>
        <div className="tab">회원</div>
        <div className="tab">배너</div>
        <div className="tab">이벤트</div>
      </div>
      <div className="body">
        <div className="menu">
          <div className="item active" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
        <div className="editor">
          <div className="title" />
          <div className="toolbar">
            <div className="btn" /><div className="btn" /><div className="btn" />
            <div className="btn" /><div className="btn" /><div className="btn" />
          </div>
          <div className="content">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectMockup({ kind }: { kind: Kind }) {
  switch (kind) {
    case "envelopes":
      return <EnvelopesMock />;
    case "sulegym":
      return <SulegymMock />;
    case "kb":
      return <KbMock />;
    case "hanmi":
      return <HanmiMock />;
  }
}
