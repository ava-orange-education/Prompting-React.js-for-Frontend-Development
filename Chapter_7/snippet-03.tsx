<div
  role="progressbar"
  aria-valuenow={Math.round(percentage)}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label={`Budget usage: ${Math.round(percentage)}% spent`}
  className="w-full bg-gray-100 rounded-full h-3"
>
  <div className={`h-3 rounded-full ...`} style={{ width: `${percentage}%` }} />
</div>
